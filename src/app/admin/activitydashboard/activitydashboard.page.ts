import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable, combineLatest } from 'rxjs';

import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Inter1, Activity } from 'src/app/modal';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activitydashboard',
  templateUrl: './activitydashboard.page.html',
  styleUrls: ['./activitydashboard.page.scss'],
})
export class ActivitydashboardPage implements OnInit {
  p$: Observable<{ usersignupdetails: Inter1[], activityform: Activity[] }>;
  x: any;
  uidd?: string;
  constructor(
    public afAuth: AngularFireAuth,
    public activityService: ActivityService,
    public afs : AngularFirestore
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
         this.uidd = user.uid;
        }
      this.p$ = combineLatest (
          this.afs.collection<Inter1>('usersignupdetails', ref => ref.where('uid', '==' , this.uidd)).valueChanges(),
          this.afs.collection<Activity>('activityform').snapshotChanges()
          .pipe(
           map(changes =>
               changes.map(c => {
                   const data = c.payload.doc.data() as Activity;
                   const id = c.payload.doc.id;
                   return { id, ...data };
               })
           )
        )
        ).pipe(
          map(([usersignupdetails, activityform]) => {
              return {usersignupdetails, activityform};
          })
        );
    });
  }
  
}
