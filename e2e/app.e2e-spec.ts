import { DeployWithGhpPage } from './app.po';

describe('deploy-with-ghp App', () => {
  let page: DeployWithGhpPage;

  beforeEach(() => {
    page = new DeployWithGhpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
