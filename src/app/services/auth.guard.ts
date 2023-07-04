import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})

/*Auth guard is an angular route guard that is used to stop unauthenticated or unauthorized users from accessing the protected routes. It is implemented using the “CanActivate” interface, which allows the guard to decide if a way can be activated with the “CanActivate()” method.*/
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}
  /*The canActivate() method from authguard returns true only when the route can be navigated. In the case of a false value, navigation can be redirected to the login page. The service injects AuthService and Router and has a single method called canActivate.*/
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //the route will now only be accessible when the user is identiϐied.
    if (!this.auth.isAuthenticated()) {
      alert('You are not allowed to view this page');
      return false;
    }
    return true;
  }
}
