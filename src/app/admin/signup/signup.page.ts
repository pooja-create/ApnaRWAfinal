import { Component, OnInit, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { usersign, userlogin } from 'src/app/modal';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
const { Camera } = Plugins;
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource, Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  loading = false;
  user: firebase.User;
  societynumber$;
  isDesktop: boolean;
  filePickerRef: ElementRef<HTMLInputElement>
  photo: SafeResourceUrl;
  p:string;
  constructor(
    private afAuth: AngularFireAuth,
    private af: AngularFireDatabase,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private afs: AngularFirestore,
    private sanitizer: DomSanitizer
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

   async getPicture(type: string) {
    if (!Capacitor.isPluginAvailable('Camera') || (this.isDesktop && type === 'gallery')) {
      this.filePickerRef.nativeElement.click();
      return;
    }

    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    this.p= image.dataUrl
  }
  isReadonly() 
  {
    return true;
  }
}
