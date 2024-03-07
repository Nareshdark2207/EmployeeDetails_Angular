import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/employee';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employees!: Employee[];
  employee: Employee = new Employee();
  gotoList: any;

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(){}

  LoginDetails(employee: Employee){
    console.log(employee);
   this.employeeService.LoginDetails(this.employee)
    // .subscribe((data: any) =>{
    //   console.log(data);
    //   this.employee = new Employee();
    //   this.gotoList();
    // }, (error: any) => console.log(error));
    // this.router.navigate(['/home']);
}
  // ftpass(){
  //   this.router.navigate(['../forgot-password']);
  // }
}