import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [{
  path: '',
  loadChildren: './pages/articles/articles.module#ArticlesModule',
  data: { preload: true }
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ]
})
export class HackerNewsModule { }
