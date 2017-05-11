import { AnnouncerPage } from './app.po';

describe('announcer App', function() {
  let page: AnnouncerPage;

  beforeEach(() => {
    page = new AnnouncerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
