import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Component({
  selector: 'tip-splitter',
  templateUrl: 'tip-splitter.component.html',
})

export class TipSplitterComponent {

  foos: FirebaseListObservable<any>

  tipTotal = 0
  bills = {}

  constructor(af: AngularFire) {
    this.foos = af.database.list('/partners')

    console.log(this.foos)

    // const itemObservable = af.database.object('/foo')
    // itemObservable.set({ name: 'new name2!'})

    // console.log(this.foo)


    // const queryList = af.database.list('/foo', {
    //   query: {
    //     limitToLast: 10,
    //     orderByKey: true
    //   }
    // })
    //
    // console.log(queryList)
  }




  savePartner(newName: string) {
    let random = Math.floor(Math.random() * (100000))
    this.foos.push({
      id: random,
      name: newName,
    })
  }





  partners = [
    {
      id: 1234,
      name: 'partner0',
      hours: 0,
    },
    {
      id: 1235,
      name: 'partner1',
      hours: 0,
    },
  ]

  calculateTipSplit(partners, tipTotal) {
    let totalHours = 0
    let totalPayOut = 0
    let totalHundreds = 0
    let totalFifties = 0
    let totalTwenties = 0
    let totalTens = 0
    let totalFives = 0
    let totalOnes = 0


    for (var partner of partners) {
      totalHours += partner.hours
    }

    let dollarsPerHour = tipTotal / totalHours

    for (var partner of partners) {
      partner.tips = Math.floor(partner.hours * dollarsPerHour)
      totalPayOut += partner.tips
      partner.bills = this.splitOutBills(partner.tips)

      totalHundreds += partner.bills.d100
      totalFifties += partner.bills.d50
      totalTwenties += partner.bills.d20
      totalTens += partner.bills.d10
      totalFives += partner.bills.d5
      totalOnes += partner.bills.d1
    }

    let remainder = tipTotal - totalPayOut;
    return {
      remainder,
      totalHours,
      totalPayOut,
      partners,
      bills: {
        d100: totalHundreds,
        d50: totalFifties,
        d20: totalTwenties,
        d10: totalTens,
        d5: totalFives,
        d1: totalOnes,
      }
    }
  }

  splitOutBills(amount) {
    let hundreds, fifties, twenties, tens, fives, ones
    let amountLeft

    hundreds = Math.floor(amount / 100)
    amountLeft = amount % 100
    fifties = Math.floor(amountLeft / 50)
    amountLeft = amountLeft % 50
    twenties = Math.floor(amountLeft / 20)
    amountLeft = amountLeft % 20
    tens = Math.floor(amountLeft / 10)
    amountLeft = amountLeft % 10
    fives = Math.floor(amountLeft / 5)
    amountLeft = amountLeft % 5
    ones = Math.floor(amountLeft / 1)
    amountLeft = amountLeft % 1

    return {
      d100: hundreds,
      d50: fifties,
      d20: twenties,
      d10: tens,
      d5: fives,
      d1: ones,
    }
  }

  calculatePartnersTips() {
    let returnedValue = this.calculateTipSplit(this.partners, this.tipTotal)

    this.partners = returnedValue.partners
    this.bills = returnedValue.bills
  }


}
