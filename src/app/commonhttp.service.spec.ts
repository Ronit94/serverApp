import { TestBed, inject } from '@angular/core/testing';

import { CommonhttpService } from './commonhttp.service';

describe('CommonhttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonhttpService]
    });
  });

  it('should be created', inject([CommonhttpService], (service: CommonhttpService) => {
    expect(service).toBeTruthy();
  }));
});
