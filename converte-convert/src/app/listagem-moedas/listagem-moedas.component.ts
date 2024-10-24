// import { Component, OnInit } from '@angular/core';
// import {MatTableDataSource} from '@angular/material/table';


// export interface PeriodicElement {
  
//   posicao: number;
//   codigo: string;
//   descricao: String;
// }



// @Component({
//   selector: 'app-listagem-moedas',
//   templateUrl: './listagem-moedas.component.html',
//   styleUrl: './listagem-moedas.component.scss',

  
  
// })
// export class ListagemMoedasComponent implements OnInit {
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   displayedColumns: string[] = ['posicao', 'codigo', 'descricao'];
//   // dataSource = new MatTableDataSource(ELEMENT_DATA);
//   dataSource = new MatTableDataSource<Moeda>([]);
//   isLoading = true;

//   @ViewChild('input') input: any;

//   constructor(private moedaService: MoedaService) {}

//   ngOnInit(): void {
//     this.fetchMoedas();

//   }
// }

// fetchMoedas(): void {
//   this.moedaService.getMoedas().subscribe({
//     next: (moedas: Moeda[]) => {
//       this.dataSource.data = moedas;
//       this.isLoading = false;
//     },
//     error: (error) => {
//       console.error('Erro ao carregar moedas:', error);
//       this.isLoading = false;
//     }
//   });
// }

// applyFilter(event: Event) {
//   const filterValue = (event.target as HTMLInputElement).value;
//   this.dataSource.filter = filterValue.trim().toLowerCase();
// }
// }


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from '../service/service.service';
 
// Importe o modelo de Moeda caso tenha criado
export interface Moeda {
  posicao: number;
  codigo: string;
  descricao: string;
}
@Component({
  selector: 'app-listagem-moedas',
  templateUrl: './listagem-moedas.component.html',
  styleUrls: ['./listagem-moedas.component.scss']
})
export class ListagemMoedasComponent implements OnInit {
  
  displayedColumns: string[] = ['posicao', 'codigo', 'descricao'];
  dataSource = new MatTableDataSource<Moeda>([]);
  isLoading = true;

  @ViewChild('input') input: any;
  // constructor(
  //   private service: ServiceService,
  //   private _snackBar: MatSnackBar
  // ) { }

  constructor(
    private service: ServiceService,
    // private _snackBar: MatSnackBar
   ) { }


  // Método executado quando o componente é inicializado
  ngOnInit(): void {
    this.fetchMoedas();
  }

  // Método para buscar moedas da API
  fetchMoedas(): void {
    this.service.service.getMoedas().subscribe({
      next: (moedas: Moeda[]) => {
        this.dataSource.data = moedas;
        this.isLoading = false;
      },
      error: () => {
        console.error('Erro ao carregar moedas:', Error);
        this.isLoading = false;
      }
    });
  }

  // Método de filtragem da tabela
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
