import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivityService } from '../activity.service';
import { Activitydetail } from 'src/app/modal';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-activitydetail',
  templateUrl: './activitydetail.page.html',
  styleUrls: ['./activitydetail.page.scss'],
})
export class ActivitydetailPage implements OnInit {
  public id;
  detail:any;
  activitydetail:any;
 
  constructor(
    private route: ActivatedRoute,
    public afs : AngularFirestore,
    public activityService: ActivityService
  ){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('hhhhhhh',this.id);
    this.activitydetail=this.afs.collection('activityform').doc(this.id).valueChanges()
    .subscribe(activitydetail =>  this.activitydetail = activitydetail);
   }

  ngOnInit() {
  }

}
