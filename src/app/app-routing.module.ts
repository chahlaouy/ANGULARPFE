import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';


import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';

import { RecBancaireComponent } from './rec-bancaire/rec-bancaire.component';
import { DepBancaireComponent } from './dep-bancaire/dep-bancaire.component';
import { DepCaisseComponent } from './dep-caisse/dep-caisse.component';
import { RecCaisseComponent } from './rec-caisse/rec-caisse.component';
import { PaymentDetail } from './shared/payment-detail.model';

import { ComptesComponent } from './comptes/comptes.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  //{path:'home',component:HomeComponent,canActivate:[AuthGuard]},
 //{ path: '', component: HomeComponent, },
 { path: 'home', component: DashComponent },
 { path: 'rec-bancaire', component: RecBancaireComponent },
 { path: 'dep-bancaire', component: DepBancaireComponent },
 { path: 'dep-caisse', component: DepCaisseComponent },
 { path: 'rec-caisse', component: RecCaisseComponent },
 { path: 'comptes', component: ComptesComponent },
 {path : 'PaymentDetailsComponent', component : PaymentDetailsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
