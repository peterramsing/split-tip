import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  partners: FirebaseListObservable<any>;
  stores: FirebaseListObservable<any>;
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
  
    })
   this.partners = this.af.database.list('/partners');
   this.stores = this.af.database.list('/stores');

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

  createStore () {
    this.stores.push({
      storeNumber: 1234,
      storeName: 'cheese',

    })

  }
}
