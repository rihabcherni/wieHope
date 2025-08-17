import { TestBed } from '@angular/core/testing';

import { AmbassadorDashService } from './ambassador-dash.service';

describe('AmbassadorDashService', () => {
  let service: AmbassadorDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbassadorDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
