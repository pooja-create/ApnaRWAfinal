import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Adminguard } from './adminguard.service';
import { Guard } from './guard.service';
import { Superadminguard } from './superadminguard.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./admin/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./admin/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'activityform',
    loadChildren: () => import('./admin/activityform/activityform.module').then( m => m.ActivityformPageModule),
    
  },
  {
    path: 'memberform',
    loadChildren: () => import('./admin/memberform/memberform.module').then( m => m.MemberformPageModule)
  },
  
  {
    path: 'activitydashboard',
    loadChildren: () => import('./admin/activitydashboard/activitydashboard.module').then( m => m.ActivitydashboardPageModule)
  },
  {
    path: 'activitydashboard/:id',
    loadChildren: () => import('./admin/activityform/activityform.module').then( m => m.ActivityformPageModule)
  },
  {
    path: 'memberdashboard',
    loadChildren: () => import('./admin/memberdashboard/memberdashboard.module').then( m => m.MemberdashboardPageModule)
  },
  {
    path: 'memberdashboard/:id',
    loadChildren: () => import('./admin/memberform/memberform.module').then( m => m.MemberformPageModule)
  },
  {
    path: 'servicedashboard',
    loadChildren: () => import('./admin/servicedashboard/servicedashboard.module').then( m => m.ServicedashboardPageModule)
  },
  {
    path: 'servicedashboard/:id',
    loadChildren: () => import('./admin/serviceform/serviceform.module').then( m => m.ServiceformPageModule)
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./admin/admin-panel/admin-panel.module').then( m => m.AdminPanelPageModule),
    canActivate: [Adminguard]
  },
  {
    path: 'superadminform',
    loadChildren: () => import('./superadmin/superadminform/superadminform.module').then( m => m.SuperadminformPageModule),
    canActivate: [Superadminguard]
  },
  {
    path: 'activitydetail/:id',
    loadChildren: () => import('./admin/activitydetail/activitydetail.module').then( m => m.ActivitydetailPageModule)
  },
  {
    path: 'serviceform',
    loadChildren: () => import('./admin/serviceform/serviceform.module').then( m => m.ServiceformPageModule)
  },
  {
    path: 'rwarules',
    loadChildren: () => import('./admin/rwarules/rwarules.module').then( m => m.RwarulesPageModule)
  },
  {
    path: 'officebearers',
    loadChildren: () => import('./admin/officebearers/officebearers.module').then( m => m.OfficebearersPageModule)
  },
  {
    path: 'showofficebearers',
    loadChildren: () => import('./showofficebearers/showofficebearers.module').then( m => m.ShowofficebearersPageModule)
  },
  {
    path: 'showrules',
    loadChildren: () => import('./showrules/showrules.module').then( m => m.ShowrulesPageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'chatdetail/:uid',
    loadChildren: () => import('./admin/chatdetail/chatdetail.module').then( m => m.ChatdetailPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
