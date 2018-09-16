import { TestBed, inject } from '@angular/core/testing';

import { CommonservicesService } from './commonservices.service';

describe('CommonservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonservicesService]
    });
  });

  it('should be created', inject([CommonservicesService], (service: CommonservicesService) => {
    expect(service).toBeTruthy();
  }));
});
