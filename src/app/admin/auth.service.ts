import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import {User} from '@firebase/auth-types';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { userProfile, AppUser, AppUser1 } from '../modal';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email: any;
  password: any;
  user$: Observable<firebase.User>;
  
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public afDatabase: AngularFireDatabase,
    public db: AngularFireDatabase,
    private userService: UserService
  ) { 

    this.user$ = afAuth.authState;

  }

logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
}

islogedin(){
    return !! this.afAuth.auth.currentUser;

}
async login(email,password)
{
  await this.afAuth.auth.signInWithEmailAndPassword(this.email= email,this.password= password);
}
createUserDocument(fname, lname , email, mobileno , societyno) {
  const user = this.afAuth.auth.currentUser;
  const userprofile: userProfile = {
    uid: user.uid,
    email: user.email,
    fname: fname,
    lname: lname,
    mobileno: mobileno,
    societyno: societyno,
  };
  return this.afs.collection('usersignupdetails').add(userprofile);
}

get appUser$(): Observable<AppUser>{
  return this.user$
    .pipe(switchMap(user => {
     if (user) { return this.userService.get(user.uid).valueChanges(); }
     
    }));
}

}
