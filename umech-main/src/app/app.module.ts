import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroProfissionalComponent } from './cadastro-profissional/cadastro-profissional.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    CadastroProfissionalComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
