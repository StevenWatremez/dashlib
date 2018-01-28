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

  get isOld(): boolean {
    return !this.upToDate(this.library.projectVersion, this.library.latestVersion) 
  }
  
  upToDate(local: string, remote: string): boolean {
    const VPAT = /^\d+(\.\d+){0,2}$/;

    if (!local || !remote || local.length === 0 || remote.length === 0)
      return false;
    if (local == remote)
      return true;
    if (VPAT.test(local) && VPAT.test(remote)) {
      var lparts = local.split('.');
      while(lparts.length < 3)
        lparts.push("0");
      var rparts = remote.split('.');
      while (rparts.length < 3)
        rparts.push("0");
      for (var i=0; i<3; i++) {
        var l = parseInt(lparts[i], 10);
        var r = parseInt(rparts[i], 10);
        if (l === r)
          continue;
        return l > r;
      }
      return true;
    } else {
      return local >= remote;
    }
  }
}