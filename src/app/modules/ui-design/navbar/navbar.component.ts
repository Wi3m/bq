import { Component, OnInit } from '@angular/core';
import { AccueilService } from '../../cors/services/accueil.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ErreurCreationModeleComponent } from '../modales/erreur-creation-modele/erreur-creation-modele.component';
import { AjouterMatriceFormComponent } from '../modales/ajouter-matrice-form/ajouter-matrice-form.component';
import { Router } from '@angular/router';

const ErreurConfig = new MatDialogConfig ();
  ErreurConfig.disableClose=true;
  ErreurConfig.autoFocus=true;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchText: any;
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
    this.dialog.open(ErreurCreationModeleComponent,{
      width:'522 px'});
    }
 }

 ajouterMatrice() {
  this.dialog.open(AjouterMatriceFormComponent,{
    width:'535px'});
 }

 visualiserModele(item){
  this.route.navigateByUrl("modeles/"+btoa(item.id));
  }

visualiserMatrice (item){
  this.route.navigateByUrl("matrices/"+btoa(item.id));
}
  
}
