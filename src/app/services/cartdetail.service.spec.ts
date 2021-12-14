import { TestBed } from '@angular/core/testing';

import { CartdetailService } from './cartdetail.service';

describe('CartdetailService', () => {
  let service: CartdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
