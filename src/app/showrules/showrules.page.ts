import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivityService } from '../admin/activity.service';
import { Observable, combineLatest } from 'rxjs';
import { Inter1, rwarules } from '../modal';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-showrules',
  templateUrl: './showrules.page.html',
  styleUrls: ['./showrules.page.scss'],
})
export class ShowrulesPage implements OnInit {
  p$: Observable<{ usersignupdetails: Inter1[], rulesform: rwarules[] }>;
  x: any;
  uidd?: string;
  
  slideopts={
    zoom :{
      maxRatio : 2
  }
  };
    
  
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
          this.afs.collection<rwarules>('rulesform').snapshotChanges()
          .pipe(
           map(changes =>
               changes.map(c => {
                   const data = c.payload.doc.data() as rwarules;
                   const id = c.payload.doc.id;
                   return { id, ...data };
               })
           )
        )
        ).pipe(
          map(([usersignupdetails, rulesform]) => {
              return {usersignupdetails, rulesform};
          })
        );
    });
  }

}
