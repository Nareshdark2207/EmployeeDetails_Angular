import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee'
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employees!: Employee[];
  employee: Employee = new Employee();
  gotoList: any;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
    this.employees = data;
  });
}
  viewEmployee(view: Employee){
    this.employee = view;
 }
}
