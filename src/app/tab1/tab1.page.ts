import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivityService } from '../admin/activity.service';
import { Observable, combineLatest } from 'rxjs';
import { Inter1, Activity } from '../modal';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  p$: Observable<{ usersignupdetails: Inter1[], activityform: Activity[] }>;
  x: any;
  uidd?: string;
  constructor(
    public afAuth: AngularFireAuth,
    public activityService: ActivityService,
    public afs : AngularFirestore
    ) 
    {}

  ngOnInit()
  {
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
