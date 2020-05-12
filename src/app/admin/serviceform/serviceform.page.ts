import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { RwaserviceService } from '../rwaservice.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from '@ionic/angular';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-serviceform',
  templateUrl: './serviceform.page.html',
  styleUrls: ['./serviceform.page.scss'],
})
export class ServiceformPage implements OnInit {
  test;
  service = {};
  myimage: string;
  mysaveimage: Observable<any>;
  constructor(
        public afs: AngularFirestore,
        public rwaService: RwaserviceService,
        public router: Router,
        private _alertController : AlertController,
        private  _camera : Camera,
        private  _angularFireStore: AngularFirestore,
        private  _angularFireAuth: AngularFireAuth,
  ) 
  { 
    const currentuser = firebase.auth().currentUser;
    const uidd = currentuser.uid;
    this.test = this.afs.collection('usersignupdetails', ref => ref.where('uid', '==' , uidd)).valueChanges();
  }
  ngOnInit() {
  }

  onsubmit(service)
  {
    this.rwaService.addservices(service);
    this.router.navigate(['serviceform']);
  }
  
}
