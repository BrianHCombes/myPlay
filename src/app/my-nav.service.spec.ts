import { TestBed, inject } from '@angular/core/testing';

import { MyNavService } from './my-nav.service';

describe('MyNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyNavService]
    });
  });

  it('should be created', inject([MyNavService], (service: MyNavService) => {
    expect(service).toBeTruthy();
  }));
});
