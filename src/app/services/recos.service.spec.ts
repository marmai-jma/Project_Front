import { TestBed } from '@angular/core/testing';

import { RecosService } from './recos.service';

describe('RecosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecosService = TestBed.get(RecosService);
    expect(service).toBeTruthy();
  });
});
