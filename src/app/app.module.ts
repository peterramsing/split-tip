import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2'

export const firebaseConfig = {
  apiKey: 'AIzaSyA3JPZ1nA1Jdyoh6kqrVw2UtQWV4ARKXws',
  authDomain: 'split-tip-dev.firebaseapp.com',
  databaseURL: 'https://split-tip-dev.firebaseio.com',
  storageBucket: 'split-tip-dev.appspot.com',
  messagingSenderId: '236921874285',
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
