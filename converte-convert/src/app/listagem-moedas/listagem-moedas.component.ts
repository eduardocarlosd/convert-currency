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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  @ViewChild('input') input: any;
  constructor(
    private service: ServiceService,
   ) { }
  ngAfterViewInit(): void {
     this.fetchMoedas();
  }

  fetchMoedas(): void {
    this.service.listarMoedas().subscribe({
      next: (res) => {
        this.moedas = res.supported_codes.map((item, index) => ({
          posicao: index + 1, 
          codigo: item[0],
          descricao: item[1],
      }));
        this.dataSource = new MatTableDataSource( this.moedas);
        console.log(res)
      },
      error: () => {
        console.error('Erro ao carregar moedas:', Error);
      }
    });
  }

 
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}




