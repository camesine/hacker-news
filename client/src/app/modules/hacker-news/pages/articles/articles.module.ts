import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

const ArticlesRouter = RouterModule.forChild([{
  path: '',
  component: ArticlesComponent,
}]);

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    ArticlesRouter,
    CommonModule,
    MatListModule,
    MatGridListModule
  ]
})
export class ArticlesModule { }
