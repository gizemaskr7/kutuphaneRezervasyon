import { TestBed } from '@angular/core/testing';

import { OdasecimService } from './odasecim.service';

describe('OdasecimService', () => {
  let service: OdasecimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdasecimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
