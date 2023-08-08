import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
//import { AuthService } from 'src/app/services/firebase.auth.service'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { take, map } from 'rxjs/operators'
import { AuthService } from 'src/app/pages/services/auth/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(/*public authService: AuthService,*/private logService: AuthService, public router: Router) {}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (environment.authenticated) {
      // skip guard checking on demo environment serve/build, remove it in your app
      return true
    }
   if(this.logService.isAuthenticated()){
     return true;
   }else{
    this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } })
    return false
   }

  }

  /*canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        this.logService.isAuthenticated( (user: any) => {
            if (user) {
              resolve(true)
            } else {
              this.router.navigate(['/auth', 'signin'])
              resolve(false);
            }
          }
        );
      }
    );
  }*/
 /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (environment.authenticated) {
      // skip guard checking on demo environment serve/build, remove it in your app
      return true
    }

    return this.authService.getUser.pipe(
      take(1),
      map(user => {
        if (user) {
          return true
        }
        this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } })
        return false
      }),
    )
  }*/
}
