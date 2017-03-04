import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2'

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
})

export class AuthComponent {

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      this.userEmail = ''
      this.userPassword = ''
    })
  }

  login() {
    this.af.auth.login({
      email: this.userEmail,
      password: this.userPassword,
    })
  }

  userEmail = ''
  userPassword = ''

}
