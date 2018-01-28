import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { LibraryService } from './library.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

// UI : Angular Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from "@angular/flex-layout";

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrariesComponent,
    MessagesComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [LibraryService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
