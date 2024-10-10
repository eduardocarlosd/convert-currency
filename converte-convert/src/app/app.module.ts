import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { ConverterComponent } from './converter/converter.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListagemMoedasComponent } from './listagem-moedas/listagem-moedas.component';
import { ConversaoMoedasComponent } from './conversao-moedas/conversao-moedas.component';
import { HistoricoConversoesComponent } from './historico-conversoes/historico-conversoes.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ConverterComponent,
    InicioComponent,
    ListagemMoedasComponent,
    ConversaoMoedasComponent,
    HistoricoConversoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
