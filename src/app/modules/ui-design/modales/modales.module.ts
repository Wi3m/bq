import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterMatriceFormComponent } from './ajouter-matrice-form/ajouter-matrice-form.component';
import { ErreurCreationModeleComponent } from './erreur-creation-modele/erreur-creation-modele.component';
import { 
  MatIconModule, 
  MatInputModule, 
  MatGridListModule, 
  MatSelectModule,
  MatDialogModule, 
  MatDividerModule, 
  MatButtonModule, 
  MatCardModule 
} from '@angular/material';

@NgModule({
  declarations: [
    AjouterMatriceFormComponent,
    ErreurCreationModeleComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule
  ],
  entryComponents: 
  [
    ErreurCreationModeleComponent,
    AjouterMatriceFormComponent
  ]
})
export class ModalesModule { }
