import { Component, OnInit } from '@angular/core';

interface IArticle {
  author: string;
  date: string;
  _id: string;
  title: string;
  url: string;
  delete: boolean;
  articleId: number;
  story_id: number;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: any[] = [{}, {}];
  constructor() { }

  ngOnInit() {
  }

  deleteArticleEvent(param) {
    console.log(param);
  }

}
