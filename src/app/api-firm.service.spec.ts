import { TestBed, inject } from '@angular/core/testing';

import { ApiFirmService } from './api-firm.service';

describe('ApiFirmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiFirmService]
    });
  });

  it('should be created', inject([ApiFirmService], (service: ApiFirmService) => {
    expect(service).toBeTruthy();
  }));
});
