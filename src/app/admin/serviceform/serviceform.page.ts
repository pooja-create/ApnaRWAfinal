import { Component, OnInit , ElementRef } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { RwaserviceService } from '../rwaservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from '@ionic/angular';

import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Observable } from 'rxjs';
import { Services } from 'src/app/modal';
const { Camera } = Plugins;
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource, Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-serviceform',
  templateUrl: './serviceform.page.html',
  styleUrls: ['./serviceform.page.scss'],
})
export class ServiceformPage implements OnInit {
  test;
  service : Services[];
  services : Services;
  myimage: string;
  mysaveimage: Observable<any>;
  isDesktop: boolean;
  filePickerRef: ElementRef<HTMLInputElement>;
  public myPhotoURL: any;
  public myPhotosRef: any;
  p:string;
  photo: SafeResourceUrl;
  id;
  constructor(
        public afs: AngularFirestore,
        public rwaService: RwaserviceService,
        public router: Router,
        private sanitizer: DomSanitizer,
        private route: ActivatedRoute,
  ) 
  { 
    const currentuser = firebase.auth().currentUser;
    const uidd = currentuser.uid;
    this.test = this.afs.collection('usersignupdetails', ref => ref.where('uid', '==' , uidd)).valueChanges();
    this.id = this.route.snapshot.paramMap.get('id');
    
    if(this.id){
      this.rwaService.get(this.id).valueChanges().subscribe(pp=>this.services =pp);
      
    }
  }
  ngOnInit() {
  }

  onsubmit(service)
  {
    if(this.id){
      this.rwaService.updateservice(this.id,service);
      }
      else{
        this.rwaService.addservices(service);
      }
    this.router.navigate(['serviceform']);
  }
  isReadonly() 
  {
    return true;
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
  
  deleteservice(){
    if(confirm('Are you sure you want to delete this product')){
      this.rwaService.delete(this.id);
      console.log(this.id)
    } else{
      return;
    }
    this.router.navigate(['servicedashboard']);
  }
}
