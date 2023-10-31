import { TestBed } from '@angular/core/testing';

import { JobproviderService } from './jobprovider.service';

describe('JobproviderService', () => {
  let service: JobproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
