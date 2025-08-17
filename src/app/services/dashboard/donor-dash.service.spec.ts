import { TestBed } from '@angular/core/testing';

import { DonorDashService } from './donor-dash.service';

describe('DonorDashService', () => {
  let service: DonorDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonorDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
