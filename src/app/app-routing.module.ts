import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { JuegoComponent } from './componentes/juego/juego.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'juego', component: JuegoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
