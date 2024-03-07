import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { LoginComponent } from './Component/login/login.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
// Staff-Module
import { HomeComponent } from './staff/home/home.component';
import { HeaderComponent } from './staff/header/header.component';
import { CreateEmployeeComponent } from './staff/create-employee/create-employee.component';
import { EmployeeListComponent } from './staff/employee-list/employee-list.component';
import { FooterComponent } from './staff/footer/footer.component';
//Employee-Module
import { EmpHeaderComponent } from './user/emp-header/emp-header.component';
import { EmpHomeComponent } from './user/emp-home/emp-home.component';
import { EmployeeViewComponent } from './user/employee-view/employee-view.component';
import { EmpFooterComponent } from './user/emp-footer/emp-footer.component';
//Admin-Module
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CreateEmployeeComponent,
    ForgotPasswordComponent,
    FooterComponent,
    HomeComponent,
    EmployeeListComponent,
    EmpHomeComponent,
    EmpHeaderComponent,
    EmpFooterComponent,
    AddUserComponent,
    UserListComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    EmployeeViewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
