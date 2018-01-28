import { Component, OnInit } from '@angular/core';
import { Library } from '../Library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.css']
})
export class LibrariesComponent implements OnInit {

  libraries: Library[];

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.getLibraries();
  }

  getLibraries(): void {
    this.libraryService.getLibraries()
        .subscribe(libraries => this.libraries = libraries);
  }
}
