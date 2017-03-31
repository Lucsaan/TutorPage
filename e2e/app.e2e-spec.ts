import { TutorPagePage } from './app.po';

describe('tutor-page App', () => {
  let page: TutorPagePage;

  beforeEach(() => {
    page = new TutorPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
