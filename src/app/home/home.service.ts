import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HomeInfo } from './home-info';
// import { INFO } from './mock-info';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InfoService {
  private dataUrl = 'api/data';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** GET info from the server */
  getInfo(): Observable<HomeInfo[]> {
    // return this.http.get<Info[]>(this.dataUrl);
    return this.http.get<HomeInfo[]>(this.dataUrl)
      .pipe(
        catchError(this.handleError('getData', []))
      );
  }

  // getInfo(): Observable<Info[]> {
  //   return of(INFO);
  // }

  /** GET data by id. Will 404 if id not found */
  getData(id: number): Observable<HomeInfo> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.get<HomeInfo>(url).pipe(
      catchError(this.handleError<HomeInfo>(`getData id=${id}`))
    );
  }

  // getData(label: string): Observable<Info> {
  //   return of(INFO.find(info => info.label === label));
  // }

  // getHero(id: number): Observable<Info> {
  //   return of(INFO.find(info => info.id === id));
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
