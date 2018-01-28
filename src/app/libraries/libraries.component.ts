import { Component, OnInit } from '@angular/core';
import { Library } from '../Library';

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.css']
})
export class LibrariesComponent implements OnInit {

  library: Library = {
    id: 1,
    name: 'Rx-Swift',
    projectVersion: '3.9.9',
    latestVersion: '4.8.7'
  };

  constructor() { }

  ngOnInit() {
  }

}
