import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      this.userEmail = ''
      this.userPassword = ''
    })
  }

  ngOnInit() {
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

