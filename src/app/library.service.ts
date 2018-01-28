import { Injectable } from '@angular/core';
import { Library } from './library';
import { LIBRARIES } from './mock-libraries';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LibraryService {

  constructor() { }

  getLibraries(): Observable<Library[]> {
    return of(LIBRARIES);
  }
}
