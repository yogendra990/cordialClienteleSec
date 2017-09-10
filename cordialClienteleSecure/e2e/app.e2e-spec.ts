import { CordialClienteleSecurePage } from './app.po';

describe('cordial-clientele-secure App', () => {
  let page: CordialClienteleSecurePage;

  beforeEach(() => {
    page = new CordialClienteleSecurePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
