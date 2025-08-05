import { CanActivateChildFn } from '@angular/router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AuthGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
