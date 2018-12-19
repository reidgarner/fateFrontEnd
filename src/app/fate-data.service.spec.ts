import { TestBed } from '@angular/core/testing';

import { FateDataService } from './fate-data.service';

describe('FateDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FateDataService = TestBed.get(FateDataService);
    expect(service).toBeTruthy();
  });
});
