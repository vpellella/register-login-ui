import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoadingActions, ShowLoadingBar } from '../../redux/loading/loading.actions';
import { AppState } from '../../redux/loading/loading.effects';
import { LoadingStore } from '../../redux/loading/loading.reducer';

import { AuthService } from '../../shared/service/auth/auth.service';
import { LoadingService } from '../../shared/service/loading/loading.service';

@Component({
  selector: 'app-reactive-template-login',
  templateUrl: './reactive.template.login.component.html',
  styleUrls: ['./reactive.template.login.component.scss']
})
export class ReactiveTemplateLoginComponent implements OnInit {

  loginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')

  })

  constructor(
    private authService: AuthService, 
    private loadingService: LoadingService,
    private store: Store<AppState>){}


  ngOnInit(): void {
      
  }

  login() {
      console.log('login invoked')
      
      let username: string  = (this.loginForm.value.username == null) ? '' : this.loginForm.value.username;
      let password: string  = this.loginForm.value.password ==  null? '' : this.loginForm.value.password;
      console.log(username + " :::::: " + password)
      this.authService.login(username, password);
      // this.store.dispatch(new ShowLoadingBar(true))
      this.loadingService.showProgressBar.next(true);
  }

}
