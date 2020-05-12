import { TestBed } from '@angular/core/testing';

import { ActivitydetailService } from './activitydetail.service';

describe('ActivitydetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivitydetailService = TestBed.get(ActivitydetailService);
    expect(service).toBeTruthy();
  });
});
