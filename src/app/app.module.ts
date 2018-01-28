import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { LibraryService } from './library.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    LibrariesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LibraryService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
