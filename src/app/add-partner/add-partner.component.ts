import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.component.css']
})
export class AddPartnerComponent implements OnInit {
  partners: FirebaseListObservable<any>;
  stores: FirebaseListObservable<any>;

  user

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      this.user = auth
      console.log(this.user)
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


}
