import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Services } from '../modal';

@Injectable({
  providedIn: 'root'
})
export class RwaserviceService {
  services: AngularFirestoreDocument<Services>;
  constructor(public afs: AngularFirestore) { }

addservices(service)
{
    return this.afs.collection('serviceform').add(JSON.parse(JSON.stringify(service)));
}
updateservice(id,mid){
  this.afs.collection('serviceform').doc(id).update(mid);
}
get(id:string){
 this.services=this.afs.collection('serviceform').doc(id);
 return this.services;
}
delete(id){
  this.afs.collection('serviceform').doc(id).delete().then(_ => console.log('deleted!'));
}

}
