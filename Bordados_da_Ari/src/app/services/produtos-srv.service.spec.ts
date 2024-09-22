import { TestBed } from '@angular/core/testing';

import { ProdutosSrvService } from './produtos-srv.service';

describe('ProdutosSrvService', () => {
  let service: ProdutosSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
