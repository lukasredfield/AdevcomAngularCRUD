import { TestBed } from '@angular/core/testing';

import { EscritosService } from './escritos.service';

describe('EscritosService', () => {
  let service: EscritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
