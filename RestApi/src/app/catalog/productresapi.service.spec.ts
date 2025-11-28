import { TestBed } from '@angular/core/testing';

import { ProductresapiService } from './productresapi.service';

describe('ProductresapiService', () => {
  let service: ProductresapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductresapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
