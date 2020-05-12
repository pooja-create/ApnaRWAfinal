import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireObject } from 'angularfire2/database';
import { map, take } from 'rxjs/operators';
import { usersign } from '../modal';
import { FirebaseNameOrConfigToken } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import {AppUser} from '../modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: firebase.User;
  constructor(
    public db: AngularFireDatabase,
    public afs: AngularFirestore
  ) { }
  save(user: firebase.User){
    this.db.object('/users/'+ user.uid).update({
     name: user.displayName,
     email: user.email
     });
  }
 
getsociety(){
    return this.afs.collection('superadminform').snapshotChanges()
    .pipe(
      (map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as usersign;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      }))
    );
}
get(uid: string): AngularFireObject<AppUser>
{
  return this.db.object('/users/' + uid);
}

}
