import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ServiceService } from "../service/service.service";

interface HistoricoConversao {
  moedaOrigem: string;
  moedaDestino: string;
  valorOriginal: number;
  valorConvertido: number;
  data: Date;
}

@Component({
  selector: 'app-conversao-moedas',
  templateUrl: './conversao-moedas.component.html',
  styleUrls: ['./conversao-moedas.component.scss']
})
export class ConversaoMoedasComponent implements OnInit {
  moedas: string[][] = [];
  moedaOrigem: string = '';
  moedaDestino: string = '';
  valor: number = 0;
  resultado: number = 0;
  historicoConversoes: HistoricoConversao[] = [];

  constructor(
    private service: ServiceService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.carregarMoedas();
    this.carregarHistorico();
  }

  carregarMoedas() {
    this.service.listarMoedas().subscribe({
      next: (response: { supported_codes: string[][]; }) => {
        this.moedas = response.supported_codes;
      },
      error: (erro: any) => {
        this._snackBar.open('Erro ao carregar moedas', 'Fechar', {
          duration: 3000
        });
      }
    });
  }

  carregarHistorico() {
    const historicoSalvo = localStorage.getItem('historicoConversoes');
    if (historicoSalvo) {
      this.historicoConversoes = JSON.parse(historicoSalvo);
    }
  }

  salvarHistorico() {
    localStorage.setItem('historicoConversoes', JSON.stringify(this.historicoConversoes));
  }

  calcularConversao() {
    if (!this.moedaOrigem || !this.moedaDestino || !this.valor) {
      this._snackBar.open('Preencha todos os campos', 'Fechar', {
        duration: 3000
      });
      return;
    }

    this.service.obterTaxaCambio(this.moedaOrigem).subscribe({
      next: (response: { conversion_rates: { [x: string]: any; }; }) => {
        const taxa = response.conversion_rates[this.moedaDestino];
        this.resultado = this.valor * taxa;

        const novaConversao: HistoricoConversao = {
          moedaOrigem: this.moedaOrigem,
          moedaDestino: this.moedaDestino,
          valorOriginal: this.valor,
          valorConvertido: this.resultado,
          data: new Date()
        };

        this.historicoConversoes.push(novaConversao);
        this.salvarHistorico();
      },
      error: (erro: any) => {
        this._snackBar.open('Erro ao converter moedas', 'Fechar', {
          duration: 3000
        });
      }
    });
  }
}
