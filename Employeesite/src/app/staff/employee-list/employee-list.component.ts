import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  employee: Employee = new Employee();
  gotoList: any;
  modal: any;

constructor( private employeeService: EmployeeService, private router: Router ) { }

ngOnInit(): void {
    this.getEmployees();
}

private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
    this.employees = data;
  });
}
employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
}

updateEmployee(update: Employee){
    this.employee = update;
}

viewEmployee(view: Employee){
   this.employee = view;
}

//Delete
deleteEmployee(id: number){
  this.employeeService.deleteEmployee(id)
  .subscribe( data => {
    console.log(data);
    this.getEmployees();
  },
  error => console.log(error));
   this.employeeService.showError("Employee Deleted successfully", "");
}

//Update Model
onSubmitUpdate(){
  this.employeeService.updateEmployee(this.employee)
  .subscribe(data =>{
    console.log(data);
    this.employee = new Employee();
    this.gotoList();
  }, error => console.log(error));
  this.employeeService.showSuccess("  Updated successfully", "");
}

}