import { SkanyPage } from './app.po';

describe('skany App', () => {
  let page: SkanyPage;

  beforeEach(() => {
    page = new SkanyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
