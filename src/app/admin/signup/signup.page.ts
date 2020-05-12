import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { usersign, userlogin } from 'src/app/modal';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  loading = false;
  user: firebase.User;
  societynumber$;
  constructor(
    private afAuth: AngularFireAuth,
    private af: AngularFireDatabase,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private afs: AngularFirestore,
  ) {
    this.societynumber$ = userService.getsociety();
   }

  ngOnInit() {
  }
  async onsubmit(form: NgForm){
    this.loading= true;
    const{
       fname,
       lname,
       email,
       password,
       mobileno,
       societyno
       } = form.value;
    try{
      const resp =  await firebase.auth().createUserWithEmailAndPassword(email, password);
      await resp.user.updateProfile({
        displayName: (fname + '  ' + lname)
      });
     
      await this.authService.createUserDocument(fname, lname, email, mobileno, societyno);
      const uid = resp.user.uid;
      
     } catch(error) {
       console.log(error.message);
       }
   }


}
