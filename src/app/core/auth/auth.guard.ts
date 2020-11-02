import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';

/**
 * Verifica si existe un token de OAuth
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }
  /**
   *  Valida si se puede o no acceder a la ruta en base a si existe o no el token
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.userHasToken()) {
      return true;
    } else {
      this.router.navigate(['/sign']);
      return false;
    }
  }
}
