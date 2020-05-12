import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(public afs : AngularFirestore) { }

addmember(m)
{
    return this.afs.collection('memberform').add(m);
}
}
