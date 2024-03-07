import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private employeeService: EmployeeService ) { }

  ngOnInit(): void {
  }
  doLogout() {
    localStorage.removeItem('token');
      this.router.navigate(['login']);
   }
}
