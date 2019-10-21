import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AccueilService } from 'src/app/modules/cors/services/accueil.service';
import { MatDialogRef } from '@angular/material/dialog';
export interface ListItem {
  title: string;
  icon: string;
}
@Component({
  selector: 'app-ajouter-matrice-form',
  templateUrl: './ajouter-matrice-form.component.html',
  styleUrls: ['./ajouter-matrice-form.component.css']
})
export class AjouterMatriceFormComponent implements OnInit  , OnDestroy {


  matrices = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  listItem: ListItem[] = [
    {title: 'A partir d\'une matrice', icon: 'home'},
    {title: 'A partir d\'un modèle', icon: 'home'}
  ];
  selectedItem = this.listItem[1];
  showListMatrice = true;
  showListModele = false;
  modeles: any[];
  constructor(private service: AccueilService, public dialogRef: MatDialogRef<AjouterMatriceFormComponent>) { }

  ngOnInit() {
    this.getMatrices();
    this.getModeles();
  }
  getModeles() {
    this.service.getMatrices().pipe(takeUntil(this.destroy$)).subscribe(
      (data: any[]) => {
      console.log(data);
      this.matrices = data;
});
  }
  getMatrices() {
    this.service.getModeles().pipe(takeUntil(this.destroy$)).subscribe(
      (data: any[]) => {
      console.log(data);
      this.modeles = data;
});
  }
  onClose(): void {
    this.dialogRef.close();
  }


changeList(value) {
  if (value === '0') {
  this.showListMatrice = true;
  this.showListModele = false;
  } else {
    this.showListMatrice = false;
    this.showListModele = true;
  }
}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
