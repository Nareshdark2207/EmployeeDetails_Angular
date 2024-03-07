import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  employee: Employee = new Employee();
  dismiss: any;
  adminForm:FormGroup;

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder, private router: Router, private http : HttpClient) {
    this.adminForm = formBuilder.group({
      'userid' : new FormControl('', Validators.required),
      'password' : new FormControl('', Validators.required),
      'role' : new FormControl('', Validators.required),
   })
  }

  ngOnInit(): void {
  }
  
  saveUserEmployee(){
    this.employeeService.addUserEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToUserEmployeeList();
    },
    error => console.log(error));
  }
  goToUserEmployeeList() {
    this.router.navigate(['/employees']);
  }
  GetAdminData(data:any){
    console.log(this.employee);
    this.saveUserEmployee();
    this.employeeService.showSuccess("User created successfully", "");
    this.router.navigate(['/user-list'])
  }
  oncancel(){
    this.dismiss({
      'dismissed': true
    });
  }
}
