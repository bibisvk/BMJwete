import { TestBed } from '@angular/core/testing';

import { VypozickaService } from './vypozicka.service';

describe('VypozickaService', () => {
  let service: VypozickaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VypozickaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
