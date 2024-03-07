import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployee(id: number) {
    throw new Error('Method not implemented.');
  }
  currentUser = {};
  private baseURL = "http://localhost:8080/api/hr/saveUser";
  private getURL = "http://localhost:8080/api/all/getUsers";
  private deleteURL = "http://localhost:8080/api/hr/deleteUser";
  private getUserURL = "http://localhost:8080/api/all/getUser";
  //authenticate
  private loginURL = "http://localhost:8080/authenticate";
  //add-user
  private saveURL = "http://localhost:8080/api/admin/saveCreateUser";
  private getAddURL = "http://localhost:8080/api/admin/getCreateUsers";
  private deleteAddURL = "http://localhost:8080/api/admin/deleteCreateUser";
  private getUserAddURL = "http://localhost:8080/api/admin/getCreateUser";
  private loginCreateUserByUserId = "http://localhost:8080/api/admin/getCreateUserByUserId";

  



  constructor( private httpClient: HttpClient, private toastr: ToastrService, private router: Router ) { }

  getEmployeesList(): Observable<Employee[]>{
    let bearer_token = 'Bearer ' + localStorage.getItem('token');
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': bearer_token
    });

        const httpOptions = {
          headers: headers_object
        };

    return this.httpClient.get<Employee[]>(`${this.getURL}`,httpOptions);
  }

  LoginDetails( employee: Employee ){
   let headers_loginData = new HttpHeaders().set('Content-Type', 'application/json');
   let loginData = {
    username: employee.username,
    password: employee.password
  }
    this.httpClient.post<any>(`${this.loginURL}`, loginData)
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        let bearer_token = 'Bearer ' + res.token;
      var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': bearer_token
    });
      const httpOptions = {
          headers: headers_object
        };
          this.httpClient.get<Employee>(`${this.loginCreateUserByUserId}/${employee.username}`,httpOptions)
          .subscribe((res:any) => {
            console.log(res);
          if(res.role === 'admin') {
            this.router.navigate(['/admin-home']);
          } else if (res.role === 'hr') {
            this.router.navigate(['/home']);
          } else if(res.role === 'user') {
            this.router.navigate(['/emp-home']);
          }
       })},
      error => {
        if(error.status && error.status === 401) {
          alert("Incorrect Username or Password");
        }
      })
  
  }

  // getToken() {
  //   return localStorage.getItem('access_token');
  // }
  // get isLoggedIn(): boolean {
  //   let authToken = localStorage.getItem('access_token');
  //   return (authToken !== null) ? true : false;
  // }
  doLogout() {
    localStorage.removeItem('token');
      this.router.navigate(['login']);
    
   }
    // Error 
    // handleError(error: HttpErrorResponse) {
    //   let msg = '';
    //   if (error.error instanceof ErrorEvent) {
    //     // client-side error
    //     msg = error.error.message;
    //   } else {
    //     // server-side error
    //     msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //   }
    //   return throwError(msg);
    // }

  createEmployee(employee: Employee): Observable<Object>{
    let bearer_token = 'Bearer ' + localStorage.getItem('token');
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': bearer_token
    });

        const httpOptions = {
          headers: headers_object
        };
     return this.httpClient.post(`${this.baseURL}`, employee,httpOptions);
  }

  getEmployeeById(id: number): Observable<Employee>{
    let bearer_token = 'Bearer ' + localStorage.getItem('token');
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': bearer_token
    });

        const httpOptions = {
          headers: headers_object
        };
    let header_getId = new HttpHeaders();
    header_getId = header_getId.set('Access-Control-Allow-Origin','*')
    return this.httpClient.get<Employee>(`${this.getUserURL}/${id}`,httpOptions);

  }

  updateEmployee(employee: Employee): Observable<Object>{
    let bearer_token = 'Bearer ' + localStorage.getItem('token');
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': bearer_token
    });

        const httpOptions = {
          headers: headers_object
        };

   
    return this.httpClient.post(`${this.baseURL}`, employee,httpOptions);
  }

  deleteEmployee(id: number): Observable<Object>{
    let bearer_token = 'Bearer ' + localStorage.getItem('token');
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': bearer_token
    });

        const httpOptions = {
          headers: headers_object
        };
    let header_deleteId = new HttpHeaders();
    header_deleteId = header_deleteId.set('Access-Control-Allow-Origin','*')
    return this.httpClient.delete(`${this.deleteURL}/${id}`,httpOptions);
  }
  
  viewEmployee(employee: Employee): Observable<Object>{
    let bearer_token = 'Bearer ' + localStorage.getItem('token');
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': bearer_token
    });

        const httpOptions = {
          headers: headers_object
        };
    let header_putData = new HttpHeaders();
    header_putData = header_putData.set('Access-Control-Allow-Origin','*')
    header_putData.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return this.httpClient.post(`${this.baseURL}`, employee,httpOptions);
  }

  showSuccess(message: string , title: string ){
    this.toastr.success(message, title,{
      positionClass: 'toast-bottom-right'
    });
  }

  showError(message: string , title: string){
      this.toastr.error(message, title,{
        positionClass: 'toast-bottom-right'
      });
  }

//Create User Module
getUserEmployeesList(): Observable<Employee[]>{
  let bearer_token = 'Bearer ' + localStorage.getItem('token');
  var headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': bearer_token
  });

      const httpOptions = {
        headers: headers_object
      };

  return this.httpClient.get<Employee[]>(`${this.getAddURL}`,httpOptions);
}

addUserEmployee(employee: Employee): Observable<Object>{
  console.log(employee);
  let bearer_token = 'Bearer ' + localStorage.getItem('token');
  var headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': bearer_token
  });

      const httpOptions = {
        headers: headers_object
      };
   return this.httpClient.post<Employee[]>(`${this.saveURL}`, employee,httpOptions);
}

getUserEmployeeById(id: number): Observable<Employee>{
  let bearer_token = 'Bearer ' + localStorage.getItem('token');
  var headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': bearer_token
  });

      const httpOptions = {
        headers: headers_object
      };
  let header_getId = new HttpHeaders();
  header_getId = header_getId.set('Access-Control-Allow-Origin','*')
  return this.httpClient.get<Employee>(`${this.getUserAddURL}/${id}`,httpOptions);

}

updateUserEmployee(employee: Employee): Observable<Object>{
  let bearer_token = 'Bearer ' + localStorage.getItem('token');
  var headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': bearer_token
  });

      const httpOptions = {
        headers: headers_object
      };

 
  return this.httpClient.post(`${this.saveURL}`, employee,httpOptions);
}

deleteUserEmployee(id: number): Observable<Object>{
  let bearer_token = 'Bearer ' + localStorage.getItem('token');
  var headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': bearer_token
  });

      const httpOptions = {
        headers: headers_object
      };
  let header_deleteId = new HttpHeaders();
  header_deleteId = header_deleteId.set('Access-Control-Allow-Origin','*')
  return this.httpClient.delete(`${this.deleteAddURL}/${id}`,httpOptions);
}

viewUserEmployee(employee: Employee): Observable<Object>{
  let bearer_token = 'Bearer ' + localStorage.getItem('token');
  var headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': bearer_token
  });

      const httpOptions = {
        headers: headers_object
      };
  let header_putData = new HttpHeaders();
  header_putData = header_putData.set('Access-Control-Allow-Origin','*')
  header_putData.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return this.httpClient.post(`${this.saveURL}`, employee,httpOptions);
}




}


