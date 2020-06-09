import { Component, OnInit, ElementRef } from '@angular/core';
import { CameraOptions} from '@ionic-native/camera/ngx';
const { Camera } = Plugins;
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource, Capacitor } from '@capacitor/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { MemberService } from '../member.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { rwarules } from 'src/app/modal';
import * as firebase from 'firebase';

@Component({
  selector: 'app-rwarules',
  templateUrl: './rwarules.page.html',
  styleUrls: ['./rwarules.page.scss'],
})
export class RwarulesPage implements OnInit {
  photo: SafeResourceUrl;
  imageUrl;
  isDesktop: boolean;
  filePickerRef: ElementRef<HTMLInputElement>;
  public myPhotoURL: any;
  public myPhotosRef: any;
  p:string;
  rule : rwarules;
  test;
  constructor(
      public afs: AngularFirestore,
      private sanitizer: DomSanitizer,
      private memberService: MemberService,
      private router: Router,
      private route: ActivatedRoute,
      public afAuth: AngularFireAuth,
  ) {
    const currentuser = firebase.auth().currentUser;
    const uidd = currentuser.uid;
    this.test = this.afs.collection('usersignupdetails', ref => ref.where('uid', '==' , uidd)).valueChanges();
   }

  ngOnInit() {
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

  onsubmit(rule)
  {
    this.memberService.addrules(rule);
    this.router.navigate(['rwarules']);
  }
  
  isReadonly() 
  {
    return true;
  }
}
