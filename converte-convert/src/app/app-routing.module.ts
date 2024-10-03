import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ConverterComponent } from './converter/converter.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListagemMoedasComponent } from './listagem-moedas/listagem-moedas.component';
import { ConversaoMoedasComponent } from './conversao-moedas/conversao-moedas.component';
import { HistoricoConversoesComponent } from './historico-conversoes/historico-conversoes.component';



const routes: Routes = [
  {path: "principal", component: PrincipalComponent},
  {path: "converter", component: ConverterComponent},
  {path: "inicio", component: InicioComponent},
  {path: "listagem-moedas", component: ListagemMoedasComponent},
  {path: "conversao-moedas", component: ConversaoMoedasComponent},
  {path: "historico-conversoes", component: HistoricoConversoesComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
