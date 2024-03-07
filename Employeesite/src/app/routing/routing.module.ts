import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../Component/login/login.component';
import { CreateEmployeeComponent } from '../staff/create-employee/create-employee.component';
import { ForgotPasswordComponent } from '../Component/forgot-password/forgot-password.component';
import { HomeComponent } from '../staff/home/home.component';
import { EmployeeListComponent } from '../staff/employee-list/employee-list.component';
import { HeaderComponent } from '../staff/header/header.component';
import { FooterComponent } from '../staff/footer/footer.component';
import { EmpHomeComponent } from '../user/emp-home/emp-home.component';
import { EmpHeaderComponent } from '../user/emp-header/emp-header.component';
import { EmpFooterComponent } from '../user/emp-footer/emp-footer.component';
import { EmployeeViewComponent } from '../user/employee-view/employee-view.component';
import { AddUserComponent } from '../admin/add-user/add-user.component';
import { UserListComponent } from '../admin/user-list/user-list.component';
import { AdminHeaderComponent } from '../admin/admin-header/admin-header.component';
import { AdminFooterComponent } from '../admin/admin-footer/admin-footer.component';
import { AdminHomeComponent } from '../admin/admin-home/admin-home.component';
import { NotFoundComponent } from '../Component/not-found/not-found.component';


const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'forgot-password', component: ForgotPasswordComponent },
  // Staff-Module
  { path:'header', component: HeaderComponent },
  { path:'home', component: HomeComponent },
  { path:'create-employee', component: CreateEmployeeComponent },
  { path:'employee-list', component: EmployeeListComponent },
  { path:'footer', component: FooterComponent },
  // Employee-Module
  { path:'emp-header', component: EmpHeaderComponent },
  { path:'emp-home', component: EmpHomeComponent },
  { path:'employee-view', component:EmployeeViewComponent },
  { path:'emp-footer', component: EmpFooterComponent },
  // Admin-Module
  { path:'admin-header', component: AdminHeaderComponent },
  { path:'admin-home', component: AdminHomeComponent },
  { path:'add-user', component: AddUserComponent },
  { path:'user-list', component: UserListComponent },
  { path:'admin-footer', component: AdminFooterComponent },
  //Not-Found
   { path: '**', component: NotFoundComponent },
  // Root-Module
  { path: '', redirectTo:'/login', pathMatch: 'full'},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
})
export class RoutingModule { }
