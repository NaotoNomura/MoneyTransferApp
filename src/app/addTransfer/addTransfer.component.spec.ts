import { TestBed, async } from '@angular/core/testing';
import { AddTransferComponent } from './addTransfer.component';

describe('AddTransferComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddTransferComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(AddTransferComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }))
});
