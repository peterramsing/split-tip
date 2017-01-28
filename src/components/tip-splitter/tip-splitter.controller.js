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
        let foo = this.tps.calculateTipSplit(this.partners, this.tipTotal)

        console.log(foo.partners)

        this.partners = foo.partners
    }
}
