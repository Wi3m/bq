import { AccueilService } from '../../cors/services/accueil.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, OnDestroy {

  historique: any[];
  matricesListe: any[];
  modelesListe: any[];


  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private service: AccueilService ,private route: Router) { }

  ngOnInit() {
    this.getAllHistorique();
    this.getMatricesListe();
    this.getModelesListe();
  }


  getAllHistorique() {
    this.service.getHistorique().pipe(takeUntil(this.destroy$)).subscribe(
      (data: any[]) => {
        this.historique = data;
      });
  }
  getMatricesListe(){
    this.service.getMatrices().pipe(takeUntil(this.destroy$)).subscribe(
      (data: any[]) => {
        this.matricesListe = data;
      });
  }
  getModelesListe(){
    this.service.getModeles().pipe(takeUntil(this.destroy$)).subscribe(
      (data: any[]) => {
        this.modelesListe = data;
      });
  }
  


  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
