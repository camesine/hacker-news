import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  @Input() articles;
  @Output() deleteArticleEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteArticle(param) {
    this.deleteArticleEvent.emit(param);
  }

  redirect(url) {
    if (url) {
      window.open(url, '_blank');
    }
  }

}
