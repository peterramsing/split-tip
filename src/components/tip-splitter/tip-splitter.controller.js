export default class TipSplitterController {
    constructor(TipSplitterService) {
        'ngInject'
        this.tps = TipSplitterService

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

        this.tipTotal = 0
    }

    calculatePartnersTips() {
        let returnedValue = this.tps.calculateTipSplit(this.partners, this.tipTotal)

        this.partners = returnedValue.partners
    }
}
