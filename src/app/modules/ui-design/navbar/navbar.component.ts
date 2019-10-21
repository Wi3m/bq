import { Component, OnInit } from '@angular/core';
import { AccueilService } from '../../cors/services/accueil.service';
import { MatDialog } from '@angular/material';
import { ErreurCreationModeleComponent } from '../modales/erreur-creation-modele/erreur-creation-modele.component';
import { AjouterMatriceFormComponent } from '../modales/ajouter-matrice-form/ajouter-matrice-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  historique: any[];
  matrices: any[];
  modeles: any[];

  constructor(private service: AccueilService,
              public dialog: MatDialog,
              private route : Router
    ) { }

  ngOnInit() {
    this.getMatrices();
    this.getModeles();
  }

  getMatrices() {
    this.service.getMatrices().subscribe(
     (matrices: any[]) => {
       this.matrices = matrices;
  });
 }

 getModeles() {
    this.service.getModeles().subscribe(
  (modeles: any[]) => {
      this.modeles = modeles;
  });
 }

 creerModele(): void {
   if (this.modeles.length >= 2 ) {
    const dialogMod = this.dialog.open(ErreurCreationModeleComponent, {
      width: '522px',
      panelClass: 'custom-modalbox'
      });
    }
 }

 ajouterMatrice() {
  const dialogMat = this.dialog.open(AjouterMatriceFormComponent);
 }

 visualiserModele(item){
  this.route.navigateByUrl("modeles/"+btoa(item.id));
  }

visualiserMatrice (item){
  this.route.navigateByUrl("matrices/"+btoa(item.id));
}
  
}
