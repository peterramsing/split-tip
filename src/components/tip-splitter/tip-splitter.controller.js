export default class TipSplitterController {
    constructor(TipSplitterService) {
        'ngInject'
        this.tps = TipSplitterService
        this.test = 'testing'
        console.log('test');
    }

    // $onInit() {
    //     this.test = 'test';
    // }
    //
    alertThings() {
        this.tps.doSomething()
    }
}
