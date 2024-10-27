// import { Component, OnInit } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';


// export interface HistoricoConversao {
//   position: number;
//   moedaOrigem: string;
//   moedaDestino: string;
//   valorOriginal: number;
//   valorConvertido: number;
//   data: Date;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

// @Component({
//   selector: 'app-historico-conversoes',
//   templateUrl: './historico-conversoes.component.html',
//   styleUrl: './historico-conversoes.component.scss'
// })
// export class HistoricoConversoesComponent {
// removerDoHistorico(_t16: number) {
// throw new Error('Method not implemented.');
// }
//   displayedColumns: string[] = ['position', 'moedaOrigem', 'moedaDestino', 'valorOriginal','valorConvertido','Date'];
//   // dataSource = ELEMENT_DATA;
// historicoConversoes: any = [];

// }



// removerDoHistorico(index: number) {
//   this.historicoConversoes.splice(index, 1);

// }

// function removerDoHistorico(index: any, number: any) {
//   throw new Error('Function not implemented.');
// }

// import { Component, OnInit } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';

// // Definindo a interface para a conversão
// interface HistoricoConversao {
//   moedaOrigem: string;
//   moedaDestino: string;
//   valorOriginal: number;
//   valorConvertido: number;
//   data: Date;
// }


// @Component({
//   selector: 'app-historico-conversoes',
//   templateUrl: './historico-conversoes.component.html',
//   styleUrls: ['./historico-conversoes.component.scss']
// })
// export class HistoricoConversoesComponent implements OnInit {
 
//   historicoConversoes: HistoricoConversao[] = [];
  
//   displayedColumns: string[] = [
//     'posicao',
//     'moedaOrigem',
//     'moedaDestino',
//     'valorOriginal',
//     'valorConvertido',
//     'data',
//     'acoes'
//   ];

//   constructor(private _snackBar: MatSnackBar) {}

//   ngOnInit(): void {
//     this.carregarHistorico();
//   }

//   carregarHistorico(): void {
//     const historicoSalvo = localStorage.getItem('historicoConversoes');
//     if (historicoSalvo) {
//       this.historicoConversoes = JSON.parse(historicoSalvo);
//     }
//   }

//   removerDoHistorico(index: number): void {
//     if (index >= 0 && index < this.historicoConversoes.length) {
//       this.historicoConversoes = this.historicoConversoes.filter((_, i) => i !== index);
//       localStorage.setItem('historicoConversoes', JSON.stringify(this.historicoConversoes));
      
//       this._snackBar.open('Conversão removida do histórico', 'Fechar', {
//         duration: 3000
//       });
//     }
//   }
// }

























// e o certo

// import { Component, OnInit } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';

// interface HistoricoConversao {
//   moedaOrigem: string;
//   moedaDestino: string;
//   valorOriginal: number;
//   valorConvertido: number;
//   data: Date;
// }

// @Component({
//   selector: 'app-historico-conversoes',
//   templateUrl: './historico-conversoes.component.html',
//   styleUrls: ['./historico-conversoes.component.scss']
// })
// export class HistoricoConversoesComponent implements OnInit {
//   historicoConversoes: HistoricoConversao[] = [];
//   displayedColumns: string[] = [
//     'posicao',
//     'data',
//     'moedaOrigem',
//     'moedaDestino',
//     'valorOriginal',
//     'valorConvertido',
//     'acoes'
//   ];

//   constructor(private _snackBar: MatSnackBar) {}

//   ngOnInit(): void {
//     this.carregarHistorico();
//   }

//   carregarHistorico(): void {
//     const historicoSalvo = localStorage.getItem('historicoConversoes');
//     if (historicoSalvo) {
//       this.historicoConversoes = JSON.parse(historicoSalvo);
//     }
//   }

//   removerDoHistorico(index: number): void {
//     if (index >= 0 && index < this.historicoConversoes.length) {
//       this.historicoConversoes = this.historicoConversoes.filter((_, i) => i !== index);
//       localStorage.setItem('historicoConversoes', JSON.stringify(this.historicoConversoes));
      
//       this._snackBar.open('Conversão removida do histórico', 'Fechar', {
//         duration: 3000
//       });
//     }
//   }
// }

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
