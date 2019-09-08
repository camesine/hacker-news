import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { RouterModule } from '@angular/router';

const ArticlesRouter = RouterModule.forChild([{
  path: '',
  component: ArticlesComponent,
}]);

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    ArticlesRouter,
    CommonModule
  ]
})
export class ArticlesModule { }
