// import { Component, inject } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-conversao-moedas',
//   templateUrl: './conversao-moedas.component.html',
//   styleUrl: './conversao-moedas.component.scss'
// })
// export class ConversaoMoedasComponent {
//   private _snackBar = inject(MatSnackBar);
// message: any;
// action: any;

//   openSnackBar(message: string, action: string) {
//     this._snackBar.open(message, action);
//   }
  

// }
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ServiceService } from "../service/service.service";



@Component({
  selector: 'app-conversao-moedas',
  templateUrl: './conversao-moedas.component.html',
  styleUrl: './conversao-moedas.component.scss'
})
export class ConversaoMoedasComponent implements OnInit {
  moedas: string[][] = []; 
  moedaOrigem: string = '';
  moedaDestino: string = '';
  valor: number = 0;
  resultado: number = 0;

  constructor(
    private service: ServiceService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.carregarMoedas();
  }

  carregarMoedas() {
    this.service.listarMoedas().subscribe({
      next: (response: { supported_codes: string[][]; }) => {
        this.moedas = response.supported_codes;
        console.log('Moedas carregadas:', this.moedas);
      },
      error: (erro: any) => {
        console.error('Erro ao carregar moedas:', erro);
        this._snackBar.open('Erro ao carregar moedas', 'Fechar', {
          duration: 3000
        });
      }
    });
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
      },
      error: (erro: any) => {
        console.error('Erro na conversão:', erro);
        this._snackBar.open('Erro ao converter moedas', 'Fechar', {
          duration: 3000
        });
      }
    });
  }
}

