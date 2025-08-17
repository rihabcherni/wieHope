import { TestBed } from '@angular/core/testing';

import { GestionDonorService } from './gestion-donor.service';

describe('GestionDonorService', () => {
  let service: GestionDonorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionDonorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
