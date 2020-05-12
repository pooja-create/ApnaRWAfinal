import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Inter1, Activity } from '../modal';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  datacollection: any;
  userCollection: AngularFirestoreCollection<any>;
  
  constructor(public afs : AngularFirestore) { }

  addactivity(act){
      return this.afs.collection('activityform').add(act);
  }
 
}