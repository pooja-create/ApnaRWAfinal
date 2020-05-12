import { Component, OnInit } from '@angular/core';
import { SuperadminService } from '../superadmin.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superadminform',
  templateUrl: './superadminform.page.html',
  styleUrls: ['./superadminform.page.scss'],
})
export class SuperadminformPage implements OnInit {
  adminform = {};
  constructor(
              private superadmin: SuperadminService,
              private router: Router,
              public navCtrl: NavController,
  ) { }

  ngOnInit() {
   
  }
  onsubmit(adminform){
   
    this.superadmin.superadminform(adminform);
  
    this.router.navigate(['superadminform']);
  }

}
