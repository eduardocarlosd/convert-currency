import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrincipalComponent } from './principal/principal.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListagemMoedasComponent } from './listagem-moedas/listagem-moedas.component';

import { HistoricoConversoesComponent } from './historico-conversoes/historico-conversoes.component';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; 
import { MatCardModule } from '@angular/material/card';

import { ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';

import {ChangeDetectionStrategy, Component} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConversaoMoedasComponent } from './conversao-moedas/conversao-moedas.component';


import { MatButtonModule } from '@angular/material/button';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ServiceService } from './service/service.service';
import { MatIconModule } from '@angular/material/icon';










@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ConversaoMoedasComponent,
    ListagemMoedasComponent,
    InicioComponent,

    ConversaoMoedasComponent,
    HistoricoConversoesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, 
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,


  
   MatIconModule
 

    
    ],

  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
   
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
