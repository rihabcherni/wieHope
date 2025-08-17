import { TestBed } from '@angular/core/testing';

import { SuccessLoginMessageService } from './success-login-message.service';

describe('SuccessLoginMessageService', () => {
  let service: SuccessLoginMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuccessLoginMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
