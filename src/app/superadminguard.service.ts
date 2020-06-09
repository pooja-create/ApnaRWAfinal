import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './admin/auth.service';
import { UserService } from './admin/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Superadminguard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }
  canActivate(): Observable<boolean>{
    return this.auth.appUsersuper$
   .pipe(map(appUsersuper => appUsersuper.isSuperAdmin));
 }
}