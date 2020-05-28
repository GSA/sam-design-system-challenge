import { TestBed } from '@angular/core/testing';

import { CmsFiltersService } from './cms-filters.service';

describe('CmsFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmsFiltersService = TestBed.get(CmsFiltersService);
    expect(service).toBeTruthy();
  });
});
