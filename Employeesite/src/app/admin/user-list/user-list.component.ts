import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  employees!: Employee[];
  employee: Employee = new Employee();
  gotoList: any;

  constructor( private employeeService: EmployeeService, private router: Router ) { }
  ngOnInit(): void {
    this.getEmployees();
}

private getEmployees(){
  this.employeeService.getUserEmployeesList().subscribe(data => {
  this.employees = data;
  console.log(data);
});
}
employeeDetails(id: number){
  this.router.navigate(['employee-details', id]);
}

updateUserEmployee(update: Employee){
  this.employee = update;
}

viewUserEmployee(view: Employee){
 this.employee = view;
}

//Delete
deleteUserEmployee(id: number){
this.employeeService.deleteUserEmployee(id)
.subscribe( data => {
  console.log(data);
  this.getEmployees();
},
error => console.log(error));
 this.employeeService.showError("Employee Deleted successfully", "");
}

//Update Model
onUserUpdate(){
this.employeeService.updateUserEmployee(this.employee)
.subscribe(data =>{
  console.log(data);
  this.employee = new Employee();
  this.gotoList();
}, error => console.log(error));
this.employeeService.showSuccess("  Updated successfully", "");
}
}
