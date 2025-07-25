import { CanActivateChildFn } from '@angular/router';

export const AuthGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
