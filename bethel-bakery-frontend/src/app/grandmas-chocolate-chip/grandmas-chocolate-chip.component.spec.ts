import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandmasChocolateChipComponent } from './grandmas-chocolate-chip.component';

describe('GrandmasChocolateChipComponent', () => {
  let component: GrandmasChocolateChipComponent;
  let fixture: ComponentFixture<GrandmasChocolateChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandmasChocolateChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandmasChocolateChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
