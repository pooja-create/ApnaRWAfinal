import { Component,OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable, combineLatest } from 'rxjs';

import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Services, Inter1 } from 'src/app/modal';
import { ActivityService } from '../activity.service';
@Component({
  selector: 'app-servicedashboard',
  templateUrl: './servicedashboard.page.html',
  styleUrls: ['./servicedashboard.page.scss'],
})
export class ServicedashboardPage implements OnInit {
  p$: Observable<{ usersignupdetails: Inter1[], serviceform: Services[] }>;
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
          this.afs.collection<Services>('serviceform').snapshotChanges()
          .pipe(
           map(changes =>
               changes.map(c => {
                   const data = c.payload.doc.data() as Services;
                   const id = c.payload.doc.id;
                   return { id, ...data };
               })
           )
        )
        ).pipe(
          map(([usersignupdetails, serviceform]) => {
              return {usersignupdetails, serviceform};
          })
        );
    });
  }

}
