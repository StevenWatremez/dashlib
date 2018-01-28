import { Component, OnInit, Input } from '@angular/core';
import { Library } from '../library';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  @Input() library: Library;

  constructor() { }

  ngOnInit() {
  }

}
