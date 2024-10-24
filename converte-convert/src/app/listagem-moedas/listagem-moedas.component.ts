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


import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from '../service/service.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
 

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
export class ListagemMoedasComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['posicao', 'codigo', 'descricao'];
  moedas: Moeda[] = [];
  dataSource: MatTableDataSource<Moeda> = new MatTableDataSource<Moeda>();
  // dataSource = new MatTableDataSource<Moeda>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // isLoading = true;

  @ViewChild('input') input: any;
  // constructor(
  //   private service: ServiceService,
  //   private _snackBar: MatSnackBar
  // ) { }

  constructor(
    private service: ServiceService,
    // private _snackBar: MatSnackBar
   ) { }
  ngAfterViewInit(): void {
     this.fetchMoedas();
  }

  
  fetchMoedas(): void {
    this.service.listarMoedas().subscribe({
      next: (res) => {
        this.moedas = res.supported_codes.map((item, index) => ({
          posicao: index + 1, // para começar a contagem de 1
          codigo: item[0],
          descricao: item[1],
      }));

        this.dataSource = new MatTableDataSource( this.moedas);
        console.log(res)
        // this.isLoading = false;
      },
      error: () => {
        console.error('Erro ao carregar moedas:', Error);
        // this.isLoading = false;
      }
    });
  }

 
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}




