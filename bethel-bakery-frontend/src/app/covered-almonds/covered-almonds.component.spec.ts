import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveredAlmondsComponent } from './covered-almonds.component';

describe('CoveredAlmondsComponent', () => {
  let component: CoveredAlmondsComponent;
  let fixture: ComponentFixture<CoveredAlmondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoveredAlmondsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveredAlmondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
