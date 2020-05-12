import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

import { AlertController } from '@ionic/angular';

import { CameraOptions} from '@ionic-native/camera/ngx';
const { Camera } = Plugins;
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


import { Plugins, CameraResultType, CameraSource, Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-activityform',
  templateUrl: './activityform.page.html',
  styleUrls: ['./activityform.page.scss'],
})
export class ActivityformPage implements OnInit {
  activity = {};
  id;
  user$: Observable<firebase.User>;
  test;
  myimage: string;
  mysaveimage: Observable<any>;
  guestPicture;
  photo: SafeResourceUrl;
  isDesktop: boolean;
  filePickerRef: ElementRef<HTMLInputElement>;
  constructor(

      private activityService: ActivityService,
      private router: Router,
      private route: ActivatedRoute,
      public afAuth: AngularFireAuth,
      private db: AngularFireDatabase,
      public afs: AngularFirestore,
      
      private  _angularFireAuth: AngularFireAuth,
      private _alertController : AlertController,
      private  _angularFireStore: AngularFirestore,
      private sanitizer: DomSanitizer
      
  ) {
    const currentuser = firebase.auth().currentUser;
    const uidd = currentuser.uid;
    this.test = this.afs.collection('usersignupdetails', ref => ref.where('uid', '==' , uidd)).valueChanges();
   
    this.mysaveimage=_angularFireStore.collection('users')
    .doc(this._angularFireAuth.auth.currentUser.uid).valueChanges();
  }

  ngOnInit() {
  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      saveToGallery:true
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
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
  }

  onsubmit(activity){
   
    this.activityService.addactivity(activity);
    this.router.navigate(['activityform']);
  }

}
