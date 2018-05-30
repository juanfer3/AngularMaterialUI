import { TestBed, inject } from '@angular/core/testing';

import { GuardUsersService } from './guard-users.service';

describe('GuardUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardUsersService]
    });
  });

  it('should be created', inject([GuardUsersService], (service: GuardUsersService) => {
    expect(service).toBeTruthy();
  }));
});
