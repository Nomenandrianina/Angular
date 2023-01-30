import { TestBed } from '@angular/core/testing';

import { FinancerService } from './financer.service';

describe('FinancerService', () => {
  let service: FinancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
