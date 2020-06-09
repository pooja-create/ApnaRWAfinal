import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Inter1, Activity, Act } from '../modal';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  datacollection: any;
  userCollection: AngularFirestoreCollection<any>;
  actget: AngularFirestoreCollection<Act>;
  activitya:AngularFirestoreDocument<Act>;
  constructor(public afs : AngularFirestore) { }

  addactivity(act){
      return this.afs.collection('activityform').add(act);
  }
get(activityid: string){
    this.actget= this.afs.collection('/activityform/');
    return this.actget;
}
updateact(id,mid){
  this.afs.collection('activityform').doc(id).update(mid);
}
geta(id:string){
 this.activitya=this.afs.collection('activityform').doc(id);
 return this.activitya;
}
delete(id){
  this.afs.collection('activityform').doc(id).delete().then(_ => console.log('deleted!'));
}
}