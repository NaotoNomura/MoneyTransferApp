import { TodoapkaPage } from './app.po';

describe('todoapka App', function() {
  let page: TodoapkaPage;

  beforeEach(() => {
    page = new TodoapkaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
