import { TestBed, inject } from '@angular/core/testing';

import { EmptypeService } from './emptype.service';

describe('EmptypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmptypeService]
    });
  });

  it('should be created', inject([EmptypeService], (service: EmptypeService) => {
    expect(service).toBeTruthy();
  }));
});
