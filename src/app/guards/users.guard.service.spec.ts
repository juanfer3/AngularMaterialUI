import { TestBed, inject } from '@angular/core/testing';

import { Users.GuardService } from './users.guard.service';

describe('Users.GuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Users.GuardService]
    });
  });

  it('should be created', inject([Users.GuardService], (service: Users.GuardService) => {
    expect(service).toBeTruthy();
  }));
});
