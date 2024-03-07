import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-emp-header',
  templateUrl: './emp-header.component.html',
  styleUrls: ['./emp-header.component.css']
})
export class EmpHeaderComponent implements OnInit {

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }
  doLogout() {
    localStorage.removeItem('token');
      this.router.navigate(['login']);
   }
}
