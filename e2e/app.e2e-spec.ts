import { SplitTipPage } from './app.po';

describe('split-tip App', () => {
  let page: SplitTipPage;

  beforeEach(() => {
    page = new SplitTipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
