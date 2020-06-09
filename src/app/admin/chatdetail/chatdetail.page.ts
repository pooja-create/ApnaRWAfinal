import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-chatdetail',
  templateUrl: './chatdetail.page.html',
  styleUrls: ['./chatdetail.page.scss'],
})
export class ChatdetailPage implements OnInit {
  message={};
  public id;
  text: string;
  chatRef: any;
  fname:any;
  constructor(
        
         private router: Router,
         public afs : AngularFirestore,
         private route: ActivatedRoute,
         private af: AngularFireAuth
  ) { 
      this.id = this.route.snapshot.paramMap.get('uid');
      this.fname = this.afs.collection('usersignupdetails',ref => ref.where('uid', '==' , this.id)).valueChanges();
      
      this.chatRef=this.afs.collection('chats',ref=>ref.orderBy('Timestamp')).valueChanges();
  }

  ngOnInit() {
  }
send(){
    if(this.text !='')
    {
      this.afs.collection('chats').add({
        Name: this.af.auth.currentUser.displayName,
        Message:this.text,
        UserId:this.af.auth.currentUser.uid,
        Timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      });
      this.text='';
    }
  }

}
