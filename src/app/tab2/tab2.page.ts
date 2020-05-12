import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivityService } from '../admin/activity.service';
import { Observable, combineLatest, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map, switchMap } from 'rxjs/operators';
import { Activity, Inter1, Member } from '../modal';
import * as firebase from 'firebase';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  uidd?: string;
  p$: Observable<{ usersignupdetails: Inter1[], memberform: Member[] }>;
  constructor(
    public afAuth: AngularFireAuth,
    public activityService: ActivityService,
    public afs : AngularFirestore
  )
  {
  }
ngOnInit(){
  firebase.auth().onAuthStateChanged( user => {
    if (user) {
       this.uidd = user.uid;
      }
    this.p$ = combineLatest (
        this.afs.collection<Inter1>('usersignupdetails', ref => ref.where('uid', '==' , this.uidd)).valueChanges(),
        this.afs.collection<Member>('memberform').valueChanges()
      ).pipe(
        map(([usersignupdetails, memberform]) => {
            return {usersignupdetails, memberform};
        })
      );
  });
}
}
