import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireObject } from 'angularfire2/database';
import { Memberm } from '../modal';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  memberf:AngularFirestoreDocument<Memberm>;
  constructor(public afs : AngularFirestore) { }

addmember(m)
{
    return this.afs.collection('memberform').add(m);
}
addrules(r)
{
    return this.afs.collection('rulesform').add(r);
}
updatemember(id,mid){
  this.afs.collection('memberform').doc(id).update(mid);
}
get(id:string){
 this.memberf=this.afs.collection('memberform').doc(id);
 return this.memberf;
}
delete(id){
  this.afs.collection('memberform').doc(id).delete().then(_ => console.log('deleted!'));
}
}
