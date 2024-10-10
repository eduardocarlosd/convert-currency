import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  
  posicao: number;
  codigo: string;
  descricao: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {posicao: 1, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  {posicao: 2, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  {posicao: 3, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  {posicao: 4, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  {posicao: 5, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  {posicao: 6, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  {posicao: 7, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  {posicao: 8, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  {posicao: 9, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  {posicao: 10, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  {posicao: 11, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  {posicao: 12, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  {posicao: 13, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  {posicao: 14, codigo: 'BRL', descricao: 'Aqui fica a descrição'},
  
];

@Component({
  selector: 'app-listagem-moedas',
  templateUrl: './listagem-moedas.component.html',
  styleUrl: './listagem-moedas.component.scss',

  
  
})
export class ListagemMoedasComponent {
  displayedColumns: string[] = ['posicao', 'codigo', 'descricao'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
