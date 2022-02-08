import { TestBed } from '@angular/core/testing';

import { PortafolioAService } from './portafolio-a.service';

describe('PortafolioAService', () => {
  let service: PortafolioAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortafolioAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
