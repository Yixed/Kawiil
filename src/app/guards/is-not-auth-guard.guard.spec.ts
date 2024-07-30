import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isNotAuthGuardGuard } from './is-not-auth-guard.guard';

describe('isNotAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isNotAuthGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
