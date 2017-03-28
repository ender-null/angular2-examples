import { SpotiAppPage } from './app.po';

describe('spoti-app App', () => {
  let page: SpotiAppPage;

  beforeEach(() => {
    page = new SpotiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
