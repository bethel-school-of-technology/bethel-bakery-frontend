import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DutchBrownieComponent } from './dutch-brownie.component';

describe('DutchBrownieComponent', () => {
  let component: DutchBrownieComponent;
  let fixture: ComponentFixture<DutchBrownieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DutchBrownieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DutchBrownieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
