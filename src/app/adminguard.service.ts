import { Injectable } from '@angular/core';
import { AuthService } from './admin/auth.service';
import { UserService } from './admin/user.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'; 
import { CanActivate } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class Adminguard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }
  canActivate(): Observable<boolean>{
    return this.auth.appUser$
   .pipe(map(appUser => appUser.isAdmin));
 }
}
