import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { GetUsername, UsernameActions } from '../redux/username/username.action';
import { AuthService } from '../shared/service/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private _store: Store<UsernameActions>,
    private httpClient: HttpClient) {}

  welcomeMessage: string = ''
  newUsername = ''



  ngOnInit(): void {
     

    this.authService.welcomeMessage$.subscribe(data => {
      this.welcomeMessage = data;
    });
    // this._store.dispatch(new GetUsername());
    // this._store.pipe(select(getCurrentUsername)).subscribe(usernameMessage => {
    //   this.welcomeMessage = usernameMessage
    // });
    this.httpClient.post("/hello", {},{
      responseType: 'text'
    }).subscribe({
      next: (data) => {
        console.log(data)
        alert(data)
      }
    })
  }

  updateUsername() {
    console.log("inside service: " +  this.newUsername)
    this.authService.updateUsername(this.newUsername)
  }
}


const getUsernameState = createFeatureSelector<string>('username');
 
export const getCurrentUsername = createSelector(getUsernameState, (state: string) => {
    return state;
});