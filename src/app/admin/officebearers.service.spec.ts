import { TestBed } from '@angular/core/testing';

import { OfficebearersService } from './officebearers.service';

describe('OfficebearersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfficebearersService = TestBed.get(OfficebearersService);
    expect(service).toBeTruthy();
  });
});
