import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssortedPastryTrayComponent } from './assorted-pastry-tray.component';

describe('AssortedPastryTrayComponent', () => {
  let component: AssortedPastryTrayComponent;
  let fixture: ComponentFixture<AssortedPastryTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssortedPastryTrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssortedPastryTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
