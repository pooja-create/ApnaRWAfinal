import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-memberform',
  templateUrl: './memberform.page.html',
  styleUrls: ['./memberform.page.scss'],
})
export class MemberformPage implements OnInit {
  member = {};
  id;
  user$: Observable<firebase.User>;
  test;
  constructor(
          private memberService: MemberService,
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
  onsubmit(member)
  {
    this.memberService.addmember(member);
    this.router.navigate(['memberform']);
  }
}
