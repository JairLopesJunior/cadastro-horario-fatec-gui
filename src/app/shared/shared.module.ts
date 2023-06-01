import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from '../core/pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from '../core/pages/cadastro/cadastro.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '', component: HomeComponent
      },
      {
          path: 'home', component: HomeComponent
      },
      {
          path: 'cadastro', component: CadastroComponent
      }
    ])
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CardComponent
  ]
})
export class SharedModule { }