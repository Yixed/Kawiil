import { TestBed } from '@angular/core/testing';

import { GastoService } from './gasto.service';

describe('GastosService', () => {
  let service: GastoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
