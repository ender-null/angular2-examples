import { HeroesappPage } from './app.po';

describe('heroesapp App', () => {
  let page: HeroesappPage;

  beforeEach(() => {
    page = new HeroesappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
