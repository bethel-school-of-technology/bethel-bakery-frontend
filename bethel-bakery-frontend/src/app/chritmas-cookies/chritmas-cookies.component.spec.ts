import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChritmasCookiesComponent } from './chritmas-cookies.component';

describe('ChritmasCookiesComponent', () => {
  let component: ChritmasCookiesComponent;
  let fixture: ComponentFixture<ChritmasCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChritmasCookiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChritmasCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
