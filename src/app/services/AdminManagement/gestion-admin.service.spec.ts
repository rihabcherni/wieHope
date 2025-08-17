import { TestBed } from '@angular/core/testing';

import { GestionAdminService } from './gestion-admin.service';

describe('GestionAdminService', () => {
  let service: GestionAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
