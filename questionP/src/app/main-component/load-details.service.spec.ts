import { TestBed } from '@angular/core/testing';

import { LoadDetailsService } from './load-details.service';

describe('LoadDetailsService', () => {
  let service: LoadDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
