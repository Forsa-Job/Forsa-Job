import { TestBed } from '@angular/core/testing';

import { ProfilReadService } from './profil-read.service';

describe('ProfilReadService', () => {
  let service: ProfilReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
