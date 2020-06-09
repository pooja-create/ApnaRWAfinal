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
import { Activityd, Act } from 'src/app/modal';

@Component({
  selector: 'app-activityform',
  templateUrl: './activityform.page.html',
  styleUrls: ['./activityform.page.scss'],
})
export class ActivityformPage implements OnInit {
  activity : Activityd[];
  activitys: Activityd;
  id;
  user$: Observable<firebase.User>;
  test;
  myimage: string;
  mysaveimage: Observable<any>;
  guestPicture;
  photo: SafeResourceUrl;
  imageUrl;
  isDesktop: boolean;
  filePickerRef: ElementRef<HTMLInputElement>;
  public myPhotoURL: any;
  public myPhotosRef: any;
  p:string;
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

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.activityService.geta(this.id).valueChanges().subscribe(pp=>this.activitys =pp);
    }
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
    this.imageUrl = image.webPath;
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

  onsubmit(activity){
    if(this.id){
      this.activityService.updateact(this.id,activity);
      }
      else{
        this.activityService.addactivity(activity);
      }
      this.router.navigate(['activityform']);
  }
  
  isReadonly() 
  {
    return true;
  }
  
  deleteactivity(){
    if(confirm('Are you sure you want to delete this product')){
      this.activityService.delete(this.id);
      console.log(this.id)
    } else{
      return;
    }
    this.router.navigate(['activitydashboard']);
  }
}
