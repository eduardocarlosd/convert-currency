import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface HistoricoConversao {
  moedaOrigem: string;
  moedaDestino: string;
  valorOriginal: number;
  valorConvertido: number;
  data: Date;
}

@Component({
  selector: 'app-historico-conversoes',
  templateUrl: './historico-conversoes.component.html',
  styleUrls: ['./historico-conversoes.component.scss']
})
export class HistoricoConversoesComponent implements OnInit {
  historicoConversoes: HistoricoConversao[] = [];
  displayedColumns: string[] = [
    'data',
    'moedaOrigem',
    'moedaDestino',
    'valorOriginal',
    'valorConvertido',
    'acoes'
  ];

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.carregarHistorico();
  }

  carregarHistorico(): void {
    const historicoSalvo = localStorage.getItem('historicoConversoes');
    if (historicoSalvo) {
      this.historicoConversoes = JSON.parse(historicoSalvo);
    }
  }

  removerDoHistorico(index: number): void {
    if (index >= 0 && index < this.historicoConversoes.length) {
      this.historicoConversoes.splice(index, 1);
      localStorage.setItem('historicoConversoes', JSON.stringify(this.historicoConversoes));

      this._snackBar.open('Conversão removida do histórico', 'Fechar', {
        duration: 3000
      });
    }
  }
}
