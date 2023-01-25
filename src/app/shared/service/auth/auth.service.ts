import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UpdateUsername, UsernameActions } from '../../../redux/username/username.action';
import { Store } from '@ngrx/store';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  welcomeMessage$  = new BehaviorSubject<string>('Hello User!...');
  previousName: any;
  token: string = '';


  constructor(
    private httpClient: HttpClient, 
    private router: Router,
    private _store: Store<UsernameActions>,
    private loadingService: LoadingService) { }

  login(username:string , password: string) {
    this.httpClient.post<any>("/login", {
      "username": username,
      "password": password
    }).subscribe({
      next: (data) => {
          this.loggedIn = true;
          this.token = data.token;
          this.router.navigateByUrl("/dashboard")
          console.log("username in service:: " + username)
          this.previousName  = setInterval(() =>{
            this.welcomeMessage$.next("Hello " + username + " !...")
            // this._store.dispatch(new UpdateUsername("Hello " + username + " !..."));
          }, 3000)
          this.loadingService.showProgressBar.next(false);
      },
      error: (errObj) => {
        this.loadingService.showProgressBar.next(false);
        console.log(errObj)
        alert(errObj.error.error.message);
      }
    } )    
  }

  updateUsername(newUser: string) {
    console.log("inside service: " +  newUser)
    clearInterval(this.previousName);
    setInterval(() =>{
      this.welcomeMessage$.next("Hello " + newUser + " !...")
      // this._store.dispatch(new UpdateUsername("Hello " + newUser + " !..."));
    }, 3000)
  }
}
