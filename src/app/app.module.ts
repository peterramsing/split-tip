import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2'

import { AppComponent } from './app.component';

import { AuthComponent } from './auth/auth.component'
import { TipSplitterComponent } from './tip-splitter/tip-splitter.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'

export const firebaseConfig = {
  apiKey: 'AIzaSyA3JPZ1nA1Jdyoh6kqrVw2UtQWV4ARKXws',
  authDomain: 'split-tip-dev.firebaseapp.com',
  databaseURL: 'https://split-tip-dev.firebaseio.com',
  storageBucket: 'split-tip-dev.appspot.com',
  messagingSenderId: '236921874285',
}

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
}

@NgModule({
  declarations: [
    AppComponent,

    AuthComponent,
    TipSplitterComponent,
    UserDashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
