import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ArticleComModule {
     id_mat: number;
     ref: string;
     nom: string;
     prix_unitair: number;
     qte: number;
    // tslint:disable-next-line: variable-name
    constructor(){
     
    }
 }
