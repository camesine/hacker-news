import { Component, OnInit } from '@angular/core';
import { ContextsProviderService } from '../../providers';

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

  articles: IArticle[] = [];
  constructor(private contextProvider: ContextsProviderService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    const subscribe = this.contextProvider.listArticles().subscribe((complete) => {
      this.articles = complete.articles;
    }, (err) => {
      alert('Error');
    }, () => {
      subscribe.unsubscribe();
    });
  }

  deleteArticleEvent(id) {
    const subscribe = this.contextProvider.removeArticle(id).subscribe(() => {
      this.listar();
    }, (err) => {
      alert('Error');
    }, () => {
      subscribe.unsubscribe();
    });
  }

}
