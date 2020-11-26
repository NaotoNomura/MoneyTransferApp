import { TestBed, async } from '@angular/core/testing';
import { TransfersListComponent } from './transfersList.component';

describe('TransfersListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransfersListComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(TransfersListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }))
});
