import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedVelvetPopsComponent } from './red-velvet-pops.component';

describe('RedVelvetPopsComponent', () => {
  let component: RedVelvetPopsComponent;
  let fixture: ComponentFixture<RedVelvetPopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedVelvetPopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedVelvetPopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
