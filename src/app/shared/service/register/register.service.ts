import { Injectable } from '@angular/core';
import { Registration } from 'src/app/register/register.component';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoadingService } from '../loading/loading.service'
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(
    private httpClient: HttpClient, 
    private loadingService: LoadingService,
    private authService: AuthService,
    private router: Router) { }

  registerNewUser(registration: Registration) {

    let username = registration.username;
    let password = registration.password
    let roles = registration.roles
    let authorities = registration.authorities


    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    this.httpClient.post<any>("http://localhost:8080/register",
      {
        "username": username,
        "password": password,
        "roles": roles,
        "authorities": authorities
      },
      {
        headers: headers
      }
      ).subscribe({
        next: (data) => {
          this.loadingService.showProgressBar.next(false);
          this.authService.loggedIn = true;
          this.authService.token = data.token;
          this.router.navigateByUrl('/dashboard');
        },
        error: (errObj) => {
          this.loadingService.showProgressBar.next(false);
          console.log(errObj)
          alert(errObj.error.error.message);
        }
      })
  }
}
