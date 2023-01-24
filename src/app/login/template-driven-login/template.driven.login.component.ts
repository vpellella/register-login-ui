import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthService } from "../../shared/service/auth/auth.service";

@Component({
    standalone: true ,
    selector: 'app-template-driven-login',
    templateUrl: './template.driven.login.component.html',
    styleUrls: [ './template.driven.login.component.scss'],
    imports: [ FormsModule, RouterModule]
})
export class TemplateDrivenLoginComponent implements OnInit{
    username = '';
    password = '';
    
    constructor(private authService: AuthService){}


    ngOnInit(): void {
        
    }

    login() {
        console.log('login invoked')
        console.log(this.username)
        this.authService.login(this.username, this.password);
        
    }

}