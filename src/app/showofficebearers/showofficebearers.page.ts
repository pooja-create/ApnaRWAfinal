import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, combineLatest, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map, switchMap } from 'rxjs/operators';
import { Inter1, Office } from '../modal';
import * as firebase from 'firebase';

@Component({
  selector: 'app-showofficebearers',
  templateUrl: './showofficebearers.page.html',
  styleUrls: ['./showofficebearers.page.scss'],
})
export class ShowofficebearersPage implements OnInit {
  uidd?: string;
  p$: Observable<{ usersignupdetails: Inter1[], officebearerslist: Office[] }>;
  constructor(
    public afAuth: AngularFireAuth,
    public afs : AngularFirestore
  ) { }

 ngOnInit(){

  firebase.auth().onAuthStateChanged( user => {
    if (user) {
       this.uidd = user.uid;
      }
    this.p$ = combineLatest (
        this.afs.collection<Inter1>('usersignupdetails', ref => ref.where('uid', '==' , this.uidd)).valueChanges(),
        this.afs.collection<Office>('officebearerslist').valueChanges()
      ).pipe(
        map(([usersignupdetails, officebearerslist]) => {
            return {usersignupdetails, officebearerslist};
        })
      );
  });

}

}
