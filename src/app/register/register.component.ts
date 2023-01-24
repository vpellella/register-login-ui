import { Component, NO_ERRORS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { RegisterService } from '../shared/service/register/register.service';
import { LoadingService } from '../shared/service/loading/loading.service';


@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.nullValidator),
    password: new FormControl('', Validators.pattern('[A-Z]+[A-Za-z0-9]*')),
    // roles: new FormControl(Validators.nullValidator),
    // authorities: new FormControl(Validators.nullValidator),
  });

  
  availableRoles = ['USER', 'ADMIN']
  availableAuthorities = ['SIMPLE_USER', 'ADMINISTRATOR']
  userRoles:string[] = []
  userAuthorities:string[] = []
  dropdownSettings:IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true,
    defaultOpen: false,
    showSelectedItemsAtTop: true

  };

  constructor(
    private registerService: RegisterService,
    private loadingService: LoadingService) { }

  ngOnInit(): void {
  }

  onUserRoleSelect(role: any) {
    if(this.userRoles.indexOf(role) < 0)
      this.userRoles.push(role);
  }
  onUserRoleSelectAll(roles: any) {
    this.userRoles = roles;
  }

  onUserRoleDeSelect(role: any) {
    this.userRoles = this.userRoles.splice(this.userRoles.indexOf(role) -1, 1)
  }

  onUserRoleDeSelectAll(roles: any) {
    this.userRoles = [];
  }


  onAuthorityRoleSelect(authority: any) {
    if(this.userAuthorities.indexOf(authority) < 0)
      this.userAuthorities.push(authority);
  }

  onAuthorityRoleSelectAll(authorities: any) {
    this.userAuthorities = authorities;
  }

  onAuthorityRoleDeSelect(authority: any) {
    this.userAuthorities = this.userAuthorities.splice(this.userAuthorities.indexOf(authority) -1, 1)
  }
  onAuthorityRoleDeSelectAll(authorities: any) {
    this.userAuthorities = [];
  }

  register(){
    let username = this.registerForm.controls.username.value;
    let password = this.registerForm.controls.password.value;
    let registration: Registration = {
      username: username,
      password: password,
      roles: this.userRoles,
      authorities: this.userAuthorities
    }
    this.loadingService.showProgressBar.next(true);
    this.registerService.registerNewUser(registration);
  }


}

export interface Registration {
  username: string | null,
  password: string | null,
  roles: string[],
  authorities: string[]
}