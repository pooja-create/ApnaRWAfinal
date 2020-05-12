import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { OfficebearersService } from '../Officebearers.service';

@Component({
  selector: 'app-officebearers',
  templateUrl: './officebearers.page.html',
  styleUrls: ['./officebearers.page.scss'],
})
export class OfficebearersPage implements OnInit {
  office = {};
  id;
  user$: Observable<firebase.User>;
  test;
  constructor(

          private officebearersService: OfficebearersService,
          private router: Router,
          private route: ActivatedRoute,
          public afAuth: AngularFireAuth,
          private db: AngularFireDatabase,
          public afs: AngularFirestore
  ) { 

    const currentuser = firebase.auth().currentUser;
    const uidd = currentuser.uid;
    this.test = this.afs.collection('usersignupdetails', ref => ref.where('uid', '==' , uidd)).valueChanges();
  }

  ngOnInit() {
  }
   onsubmit(office)
  {
    this.officebearersService.addoffice(office);
    this.router.navigate(['admin-panel']);
  }

}
