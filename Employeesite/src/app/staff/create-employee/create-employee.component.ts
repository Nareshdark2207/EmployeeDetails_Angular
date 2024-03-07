import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/employee';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  dismiss: any;
  exform:FormGroup;

  constructor( private employeeService: EmployeeService, private formBuilder: FormBuilder, private router: Router, private http : HttpClient ) {
    this.exform = formBuilder.group({
      'firstName' : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]),
      'lastName' : new FormControl('', Validators.required),
      'gender' : new FormControl('', Validators.required),
      'emailid': new FormControl('', [Validators.required, Validators.email]),
      'mobileNumber': new FormControl('',[Validators.required, Validators.pattern('[0-9]{10}'), Validators.maxLength(10)]),
      'dateofbirth' : new FormControl('', Validators.required),
      'empid' : new FormControl('', Validators.required),
      'jobposition': new FormControl('', Validators.required),
      'dateofhire': new FormControl('', Validators.required),
      'empstatus' : new FormControl('', Validators.required),
      'currentaddress': new FormControl('', Validators.required),
      'homeaddress' : new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
  onSubmit(data:any){
    console.log(this.employee);
    this.saveEmployee();
    this.employeeService.showSuccess("Employee created successfully", "");
    this.router.navigate(['employee-list']);
  }
  oncancel(){
    this.dismiss({
      'dismissed': true
    });
  }

}

