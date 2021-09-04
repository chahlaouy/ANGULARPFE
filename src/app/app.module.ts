import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { DashComponent } from './dash/dash.component';
import { RecBancaireComponent } from './rec-bancaire/rec-bancaire.component';
import { DepBancaireComponent } from './dep-bancaire/dep-bancaire.component';
import { DepCaisseComponent } from './dep-caisse/dep-caisse.component';
import { RecCaisseComponent } from './rec-caisse/rec-caisse.component';
import { ComptesComponent } from './comptes/comptes.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { CompteDetailService } from './shared/comptes.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    ComptesComponent,
    HomeComponent,
    DashComponent,
    RecBancaireComponent,
    DepBancaireComponent,
    DepCaisseComponent,
    RecCaisseComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
