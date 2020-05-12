import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
        private db: AngularFireDatabase,
        private router: Router,
        private afAuth: AngularFireAuth,
        private authservice: AuthService,
        private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  signup(){
    this.router.navigate(['signup']);
  }
  async onsubmit(form: NgForm){
    const{
      email,
      password,
       } = form.value;
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
  
    await this.afAuth.auth.signInWithEmailAndPassword(email, password);
   
    this.router.navigate(['tabs/tab1']);
  
  }
}
