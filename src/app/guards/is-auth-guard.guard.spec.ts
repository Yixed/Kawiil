import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isAuthGuardGuard } from './is-auth-guard.guard';

describe('isAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isAuthGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
