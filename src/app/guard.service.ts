import { Injectable } from '@angular/core';
import { RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthService } from './admin/auth.service';
import { map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Guard implements CanActivate {

  constructor(private auth: AuthService,private router: Router) { }
  canActivate(route, state: RouterStateSnapshot)
  {
    return this.auth.user$.pipe(map(user=>{
      if (user) { return true; }
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }));
  }
}
