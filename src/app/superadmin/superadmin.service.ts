import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class SuperadminService {

  constructor(
      private afs: AngularFirestore
  ) { }

  superadminform(superadmin){
    return this.afs.collection('superadminform').add(superadmin);
  }
}
