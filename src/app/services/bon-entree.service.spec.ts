import { TestBed } from '@angular/core/testing';

import { BonEntreeService } from './bon-entree.service';

describe('BonEntreeService', () => {
  let service: BonEntreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonEntreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
