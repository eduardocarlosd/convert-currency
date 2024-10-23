import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiKey = 'ca52cbeda305379ef38c7ae7';
  private baseUrl = 'https://v6.exchangerate-api.com/v6';


  constructor(private http: HttpClient) { }
}
