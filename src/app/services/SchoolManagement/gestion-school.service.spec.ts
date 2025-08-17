import { TestBed } from '@angular/core/testing';

import { GestionSchoolService } from './gestion-school.service';

describe('GestionSchoolService', () => {
  let service: GestionSchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionSchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
