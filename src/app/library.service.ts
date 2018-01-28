import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, zip, flatMap } from 'rxjs/operators';
import { forkJoin } from "rxjs/observable/forkJoin";

import { Library } from './library';
import { DASHBOARD_LIBRARIES } from './mock-libraries';
import { MessageService } from './message.service';

@Injectable()
export class LibraryService {

  private cocoapodsLibrariesUrl = 'https://search.cocoapods.org/api/v1/pods.picky.hash.json?query';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  /*getLibraries(): Observable<Library[]> {
    // Todo: send the message _after_ fetching the heroes
    this.log('HeroService: fetched heroes')
    return of(LIBRARIES);
  }*/

  /** GET libraries from the server **/
  getLibraries(): Observable<Library[]> {
    const libraryObservableList: Observable<Library>[] = DASHBOARD_LIBRARIES.map( library => {
      return this.searchLibrary(library.id, library.currentVersion)
    })
    return forkJoin(libraryObservableList)
      .pipe(
        tap(libraries => this.log(`fetched libraries`)),
        catchError(this.handleError('getLibraries', []))
      );
  }

  /** GET cocoapod lib by name **/
  searchLibrary(id: string, currentVersion: string): Observable<Library> {
    const url = `${this.cocoapodsLibrariesUrl}=${id}`;
    return this.http.get(url)
      .pipe(
        map(data => {
          var allocations: Object = data['allocations'];
          var lib: Object = allocations[0][5][0]
          var library: Library = new Library()
          library.id = lib['id']
          library.projectVersion = currentVersion
          library.latestVersion = lib['version']
          library.summary = lib['summary']
          library.link = lib['link']
          library.source = lib['source']['http']
          return library
        }),
        tap(_ => this.log(`fetched library name=${name}`)),
        catchError(this.handleError<Library>(`getLibrary name=${name}`))
      );
  }

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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
