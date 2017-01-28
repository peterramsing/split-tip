angular.module('topLevel', ['splitTips'])
  .controller('topCtrl', function topCtrl() {
    scope = this
    scope.nameIsDifferent = 'amazing'
  })


function SplitTipController() {
    var splitTip = this;

    splitTip.partners = [
      {
        name: 'partner1',
        hours: 0
      },
      {
        name: 'partner2',
        hours: 0
      }
    ]

    splitTip.tipTotal = 0
    splitTip.remainder = 0

    splitTip.calculateTipSplit = function () {
      var totalHours = 0
      var totalPayOut = 0
      for (var partner of splitTip.partners) {
        totalHours += partner.hours
      }

      var dollarsPerHour = splitTip.tipTotal / totalHours

      for (var partner of splitTip.partners) {
        partner.tips = Math.floor(partner.hours * dollarsPerHour)
        totalPayOut += partner.tips
      }
      splitTip.remainder = splitTip.tipTotal - totalPayOut
    }

}
var splitTipTemplate = '<div  ng-repeat="partner in $ctrl.partners">  <label>    {{partner.name}}    <input      ng-model="partner.hours"      type="number">  </label></div><input ng-model="$ctrl.tipTotal"><button type="button" name="button" ng-click="$ctrl.calculateTipSplit()">Submit</button><p>{{$ctrl.partners[0].tips}}</p><p>{{$ctrl.partners[1].tips}}</p> <p>{{$ctrl.name}}</p>'

angular.module('splitTips', [])
  .component('splitTips', {
    template: splitTipTemplate,
    controller: SplitTipController,
    bindings: {name: '='}
})
