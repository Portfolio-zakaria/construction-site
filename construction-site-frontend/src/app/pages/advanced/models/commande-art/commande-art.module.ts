import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComModule } from '../article-com/article-com.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CommandeArtModule {

  public items: Map<number,ArticleComModule> = new Map();
  // tslint:disable-next-line: variable-name
  id_fourni: number;
  // tslint:disable-next-line: variable-name
  id_chantier: number;
  user_Name:string;
}
