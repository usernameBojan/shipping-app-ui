import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminsComponent } from './components/admins/admins.component';
import { CreateAdminComponent } from './components/admins/create-admin/create-admin.component';
import { EditAdminComponent } from './components/admins/edit-admin/edit-admin.component';
import { OrderStatsComponent } from './components/order-stats/order-stats.component';
import { InquiryStatsComponent } from './components/inquiry-stats/inquiry-stats.component';
import { DeleteAdminComponent } from './components/admins/delete-admin/delete-admin.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyComponent } from './components/companies/company/company.component';
import { AddCompanyComponent } from './components/companies/add-company/add-company.component';
import { EditCompanyComponent } from './components/companies/edit-company/edit-company.component';
import { DeleteCompanyComponent } from './components/companies/delete-company/delete-company.component';
import { OrderComponent } from './components/order/order.component';
import { CalculatePriceComponent } from './components/calculate-price/calculate-price.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    AdminsComponent,
    CreateAdminComponent,
    EditAdminComponent,
    OrderStatsComponent,
    InquiryStatsComponent,
    DeleteAdminComponent,
    CompaniesComponent,
    CompanyComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    DeleteCompanyComponent,
    OrderComponent,
    CalculatePriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
