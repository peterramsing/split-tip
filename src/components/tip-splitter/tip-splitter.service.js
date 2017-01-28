export class TipSplitterService {
    calculateTipSplit(partners, tipTotal) {
        let totalHours = 0
        let totalPayOut = 0

        for (var partner of partners) {
          totalHours += partner.hours
        }

        let dollarsPerHour = tipTotal / totalHours

        for (var partner of partners) {
          partner.tips = Math.floor(partner.hours * dollarsPerHour)
          totalPayOut += partner.tips
        }

        let remainder = tipTotal - totalPayOut
        return {
            remainder,
            totalHours,
            totalPayOut,
            partners
        }
    }
}
