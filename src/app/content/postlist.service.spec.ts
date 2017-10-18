import { TestBed, inject } from '@angular/core/testing';

import { PostlistService } from './postlist.service';

describe('PostlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostlistService]
    });
  });

  it('should be created', inject([PostlistService], (service: PostlistService) => {
    expect(service).toBeTruthy();
  }));
});
