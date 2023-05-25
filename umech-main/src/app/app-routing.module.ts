import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroProfissionalComponent } from './cadastro-profissional/cadastro-profissional.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },

  {
    path: "cadastro",
    component: CadastroProfissionalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
