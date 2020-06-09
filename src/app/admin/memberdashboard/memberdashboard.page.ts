import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable, combineLatest, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map, switchMap } from 'rxjs/operators';

import * as firebase from 'firebase';
import { Member, Inter1 } from 'src/app/modal';
import { ActivityService } from '../activity.service';
import { MemberService } from '../member.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-memberdashboard',
  templateUrl: './memberdashboard.page.html',
  styleUrls: ['./memberdashboard.page.scss'],
})
export class MemberdashboardPage implements OnInit {
  uidd?: string;
  p$: Observable<{ usersignupdetails: Inter1[], memberform: Member[] }>;
 
  constructor(
    public afAuth: AngularFireAuth,
    public memberService: MemberService,
    public afs : AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    
    
   }

  ngOnInit() {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
         this.uidd = user.uid;
        }
      this.p$ = combineLatest (
          this.afs.collection<Inter1>('usersignupdetails', ref => ref.where('uid', '==' , this.uidd)).valueChanges(),
          this.afs.collection<Member>('memberform').snapshotChanges()
          .pipe(
           map(changes =>
               changes.map(c => {
                   const data = c.payload.doc.data() as Member;
                   const id = c.payload.doc.id;
                   return { id, ...data };
               })
           )
        )
        ).pipe(
          map(([usersignupdetails, memberform]) => {
              return {usersignupdetails, memberform};
          })
        );
    });
  }

}
