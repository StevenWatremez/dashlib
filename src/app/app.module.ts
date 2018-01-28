import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { LibraryService } from './library.service';

@NgModule({
  declarations: [
    AppComponent,
    LibrariesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
