import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'
import { AdminsComponent } from './components/admins/admins.component';
import { CreateAdminComponent } from './components/admins/create-admin/create-admin.component';
import { InquiryStatsComponent } from './components/inquiry-stats/inquiry-stats.component';
import { OrderStatsComponent } from './components/order-stats/order-stats.component';
import { EditAdminComponent } from './components/admins/edit-admin/edit-admin.component';
import { DeleteAdminComponent } from './components/admins/delete-admin/delete-admin.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyComponent } from './components/companies/company/company.component';
import { EditCompanyComponent } from './components/companies/edit-company/edit-company.component';
import { DeleteCompanyComponent } from './components/companies/delete-company/delete-company.component';
import { AddCompanyComponent } from './components/companies/add-company/add-company.component';
import { OrderComponent } from './components/order/order.component';
import { CalculatePriceComponent } from './components/calculate-price/calculate-price.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'calculate-price',
    component: CalculatePriceComponent
  },
  {
    path: 'calculate-price/order/:id',
    component: OrderComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'admin/admins',
    component: AdminsComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'admin/admins/create',
    component: CreateAdminComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'admin/admins/edit/:id',
    component: EditAdminComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'admin/admins/delete/:id',
    component: DeleteAdminComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'admin/inquiries',
    component: InquiryStatsComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'admin/orders',
    component: OrderStatsComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'admin/companies',
    component: CompaniesComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'admin/companies/add',
    component: AddCompanyComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'admin/companies/details/:name',
    component: CompanyComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'admin/companies/edit/:name',
    component: EditCompanyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/companies/delete/:name',
    component: DeleteCompanyComponent,
    canActivate: [AuthGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }