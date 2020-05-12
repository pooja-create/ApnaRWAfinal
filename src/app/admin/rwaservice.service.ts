import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class RwaserviceService {

  constructor(public afs: AngularFirestore) { }

addservices(service)
{
    return this.afs.collection('serviceform').add(JSON.parse(JSON.stringify(service)));
}

}
