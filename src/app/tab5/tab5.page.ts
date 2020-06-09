import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, combineLatest } from 'rxjs';
import * as firebase from 'firebase';
import { Inter1, Chat } from '../modal';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  p$: Observable<{ usersignupdetails: Inter1[], chatform: Chat[] }>;
  x: any;
  uidd?: string;
  constructor(
    public afAuth: AngularFireAuth,
    public afs : AngularFirestore
  ) { }

  ngOnInit() {

    firebase.auth().onAuthStateChanged( user => {
      if (user) {
         this.uidd = user.uid;
        }
      this.p$ = combineLatest (
          this.afs.collection<Inter1>('usersignupdetails', ref => ref.where('uid', '==' , this.uidd)).valueChanges(),
          this.afs.collection<Chat>('usersignupdetails').valueChanges()
        ).pipe(
          map(([usersignupdetails, chatform]) => {
              return {usersignupdetails, chatform};
          })
        );
    });
  }

}
