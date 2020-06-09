import { TestBed } from '@angular/core/testing';

import { SuperadminguardService } from './superadminguard.service';

describe('SuperadminguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperadminguardService = TestBed.get(SuperadminguardService);
    expect(service).toBeTruthy();
  });
});
