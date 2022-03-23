import { TestBed } from '@angular/core/testing';

import { KnihaServiceService } from './kniha-service.service';

describe('KnihaServiceService', () => {
  let service: KnihaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnihaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
