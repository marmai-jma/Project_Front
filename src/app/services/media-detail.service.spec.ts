import { TestBed } from '@angular/core/testing';

import { MediaDetailService } from './media-detail.service';

describe('MediaDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaDetailService = TestBed.get(MediaDetailService);
    expect(service).toBeTruthy();
  });
});
