import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComModule } from '../article-com/article-com.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmailModule {
  to = '';
  messageSubject= '';
  messageText='';
 }