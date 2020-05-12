import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class OfficebearersService {

  constructor(private afs: AngularFirestore) { }

addoffice(m)
{
    return this.afs.collection('officebearerslist').add(m);
}
}
