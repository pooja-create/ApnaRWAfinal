import { Component,OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivityService } from '../admin/activity.service';
import { Observable, combineLatest } from 'rxjs';
import { Inter1, Services } from '../modal';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  p$: Observable<{ usersignupdetails: Inter1[], serviceform: Services[] }>;
  
  uidd?: string;
  constructor( 
    public afAuth: AngularFireAuth,
    public activityService: ActivityService,
    public afs : AngularFirestore 
 ) {}
 
 ngOnInit()
  {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
         this.uidd = user.uid;
        }
      this.p$ = combineLatest (
          this.afs.collection<Inter1>('usersignupdetails', ref => ref.where('uid', '==' , this.uidd)).valueChanges(),
          this.afs.collection<Services>('serviceform').valueChanges()
        ).pipe(
          map(([usersignupdetails, serviceform]) => {
              return {usersignupdetails, serviceform};
          })
        );
    });
  }
}
