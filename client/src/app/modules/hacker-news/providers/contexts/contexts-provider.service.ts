import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as CONSTANTS } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContextsProviderService {

  private BASE = CONSTANTS.BASE;

  constructor(public http: HttpClient) { }

  public listArticles(): Observable<any> {
    return this.http.get(`${this.BASE}${CONSTANTS.ARTICLES.ENDPOINT}${CONSTANTS.ARTICLES.SERVICE.getAll}`);
  }

  public removeArticle(articleId): Observable<any> {
    return this.http.post(`${this.BASE}${CONSTANTS.ARTICLES.ENDPOINT}${CONSTANTS.ARTICLES.SERVICE.delete}`, { articleId });
  }

}
