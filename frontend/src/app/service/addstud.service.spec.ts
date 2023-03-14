import { TestBed } from '@angular/core/testing';

import { AddstudService } from './addstud.service';

describe('AddstudService', () => {
  let service: AddstudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddstudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
