import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  partners: FirebaseListObservable<any>;
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      this.user
    })
   this.partners = this.af.database.list('/partners');

   }

  ngOnInit() {
  }


  createPartner () {
    this.partners.push({
      storeNumber: 1234,
      nameFirst: 'cheese',
      nameLast: 'head',
      partnerNumber: 1234,


    })

  }

}
