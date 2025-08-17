import { TestBed } from '@angular/core/testing';

import { GestionAmbassadorService } from './gestion-ambassador.service';

describe('GestionAmbassadorService', () => {
  let service: GestionAmbassadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionAmbassadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
