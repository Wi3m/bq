import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../ui-design/navbar/navbar.component';
import { UiDesignModule } from '../../ui-design/ui-design.module';
import { AccueilComponent } from './accueil.component';
@NgModule({
  declarations: [ AccueilComponent],
  imports: [
    CommonModule,
    UiDesignModule,
    RouterModule.forChild([
      {
        path: '**', component: NavbarComponent, children: [
          { path: '**', component: AccueilComponent },
          
        ]
      },
    ])
  ]
})
export class AccueilModule { }
