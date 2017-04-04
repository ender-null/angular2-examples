import { FireChatPage } from './app.po';

describe('fire-chat App', () => {
  let page: FireChatPage;

  beforeEach(() => {
    page = new FireChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
