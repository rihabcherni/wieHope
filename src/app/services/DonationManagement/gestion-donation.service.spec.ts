import { TestBed } from '@angular/core/testing';

import { GestionDonationService } from './gestion-donation.service';

describe('GestionDonationService', () => {
  let service: GestionDonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionDonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
