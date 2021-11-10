import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateCaramelPetitComponent } from './chocolate-caramel-petit.component';

describe('ChocolateCaramelPetitComponent', () => {
  let component: ChocolateCaramelPetitComponent;
  let fixture: ComponentFixture<ChocolateCaramelPetitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChocolateCaramelPetitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolateCaramelPetitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
