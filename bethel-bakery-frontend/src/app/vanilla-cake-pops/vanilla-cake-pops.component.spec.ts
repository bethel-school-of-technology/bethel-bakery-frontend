import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanillaCakePopsComponent } from './vanilla-cake-pops.component';

describe('VanillaCakePopsComponent', () => {
  let component: VanillaCakePopsComponent;
  let fixture: ComponentFixture<VanillaCakePopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanillaCakePopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanillaCakePopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
