import { TestBed } from '@angular/core/testing';

import { StudentenService } from './studenten.service';

describe('StudentenService', () => {
  let service: StudentenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
