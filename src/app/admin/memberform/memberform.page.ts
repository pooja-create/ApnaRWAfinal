import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { MemberService } from '../member.service';
import { Memberm } from 'src/app/modal';

import { CameraOptions} from '@ionic-native/camera/ngx';
const { Camera } = Plugins;
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource, Capacitor } from '@capacitor/core';
import { Activityd } from 'src/app/modal';

@Component({
  selector: 'app-memberform',
  templateUrl: './memberform.page.html',
  styleUrls: ['./memberform.page.scss'],
})
export class MemberformPage implements OnInit {
  member : Memberm[];
  members : Memberm;
  id;
  user$: Observable<firebase.User>;
  test;
  photop: SafeResourceUrl;
  photos: SafeResourceUrl;
  imageUrl;
  isDesktop: boolean;
  filePickerRef: ElementRef<HTMLInputElement>;
  public myPhotoURL: any;
  public myPhotosRef: any;
  p:string;
  s:string;
  
  constructor(
          private memberService: MemberService,
          private router: Router,
          private route: ActivatedRoute,
          public afAuth: AngularFireAuth,
          private db: AngularFireDatabase,
          public afs: AngularFirestore,
          private sanitizer: DomSanitizer
  ) { 
    const currentuser = firebase.auth().currentUser;
    const uidd = currentuser.uid;
    this.id = this.route.snapshot.paramMap.get('id');
    this.test = this.afs.collection('usersignupdetails', ref => ref.where('uid', '==' , uidd)).valueChanges();

    if(this.id){
      this.memberService.get(this.id).valueChanges().subscribe(pp=>this.members =pp);
      
    }
  }

  ngOnInit() {
  }
  onsubmit(member)
  {
    if(this.id){
    this.memberService.updatemember(this.id,member);
    }
    else{
    this.memberService.addmember(member);
    }
    this.router.navigate(['memberform']);
  }
   
  isReadonly() 
  {
    return true;
  }
  async getPPicture(type: string) {
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

    this.photop = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    this.p= image.dataUrl
  }
  async getSPicture(type: string) {
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

    this.photos = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    this.s= image.dataUrl
  }

  deletemember(){
    if(confirm('Are you sure you want to delete this product')){
      this.memberService.delete(this.id);
      console.log(this.id)
    } else{
      return;
    }
    this.router.navigate(['memberdashboard']);
  }
}

