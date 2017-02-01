export class TipSplitterService {
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

        let remainder = tipTotal - totalPayOut
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

        hundreds = Math.floor(amount/100)
        amountLeft = amount % 100
        fifties = Math.floor(amountLeft/50)
        amountLeft = amountLeft % 50
        twenties = Math.floor(amountLeft/20)
        amountLeft = amountLeft % 20
        tens = Math.floor(amountLeft/10)
        amountLeft = amountLeft % 10
        fives = Math.floor(amountLeft/5)
        amountLeft = amountLeft % 5
        ones = Math.floor(amountLeft/1)
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
}
