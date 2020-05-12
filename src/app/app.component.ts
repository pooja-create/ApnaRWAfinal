import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './admin/auth.service';
import { UserService } from './admin/user.service';
import { AppUser } from './modal';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  appUser: AppUser;
  x: boolean;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private auth: AuthService,
    private userservice: UserService,
    private afAuth: AngularFireAuth
    
  ) {
    auth.appUser$.subscribe(appUser => this.x = appUser.isAdmin);
    auth.user$.subscribe(user=>{
      if(user) {
        userservice.save(user);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
}

islogedin(){
    return !! this.afAuth.auth.currentUser;
}

}
