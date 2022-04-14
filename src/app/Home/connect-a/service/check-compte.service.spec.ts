import { TestBed } from '@angular/core/testing';

import { CheckCompteService } from './check-compte.service';

describe('CheckCompteService', () => {
  let service: CheckCompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckCompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
