import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }
  doLogout() {
    localStorage.removeItem('token');
      this.router.navigate(['login']);
   }
}
