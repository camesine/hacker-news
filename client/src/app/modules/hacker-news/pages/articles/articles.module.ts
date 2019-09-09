import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderModule } from '../../../cross/header/header.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { HttpClientModule } from '@angular/common/http';

const ArticlesRouter = RouterModule.forChild([{
  path: '',
  component: ArticlesComponent,
}]);

@NgModule({
  declarations: [ArticlesComponent, ArticlesListComponent],
  imports: [
    ArticlesRouter,
    CommonModule,
    MatListModule,
    MatGridListModule,
    HeaderModule,
    HttpClientModule,
  ]
})
export class ArticlesModule { }
