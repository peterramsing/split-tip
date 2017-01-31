export default class TipSplitterController {
    constructor(TipSplitterService) {
        'ngInject'
        this.tps = TipSplitterService
        this.tipTotal = 0
        this.bills

        // This is just to set things up before the backend is added.
        this.partners = [
            {
                name: 'partner0',
                hours: 0,
            },
            {
                name: 'partner1',
                hours: 0,
            },
        ]
    }

    calculatePartnersTips() {
        let returnedValue = this.tps.calculateTipSplit(this.partners, this.tipTotal)

        this.partners = returnedValue.partners
        this.bills = returnedValue.bills
    }
}
