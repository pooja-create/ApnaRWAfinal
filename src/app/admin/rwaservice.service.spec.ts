import { TestBed } from '@angular/core/testing';

import { RwaserviceService } from './rwaservice.service';

describe('RwaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RwaserviceService = TestBed.get(RwaserviceService);
    expect(service).toBeTruthy();
  });
});
