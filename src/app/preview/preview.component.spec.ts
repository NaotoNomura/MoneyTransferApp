import { TestBed, async } from '@angular/core/testing';
import { PreviewComponent } from './preview.component';

describe('TransfersListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PreviewComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(PreviewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
