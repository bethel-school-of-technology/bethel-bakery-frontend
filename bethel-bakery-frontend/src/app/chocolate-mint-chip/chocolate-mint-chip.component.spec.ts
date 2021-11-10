import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateMintChipComponent } from './chocolate-mint-chip.component';

describe('ChocolateMintChipComponent', () => {
  let component: ChocolateMintChipComponent;
  let fixture: ComponentFixture<ChocolateMintChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChocolateMintChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolateMintChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
