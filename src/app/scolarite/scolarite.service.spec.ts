import { TestBed, inject } from '@angular/core/testing';

import { ScolariteService } from './scolarite.service';

describe('ScolariteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScolariteService]
    });
  });

  it('should be created', inject([ScolariteService], (service: ScolariteService) => {
    expect(service).toBeTruthy();
  }));
});
