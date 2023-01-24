import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { TemplateDrivenLoginComponent } from './login/template-driven-login/template.driven.login.component';
import { ReactiveTemplateLoginComponent } from './login/reactive-driven-login/reactive.template.login.component';
import { UploadComponent } from './upload/upload.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "", component: ReactiveTemplateLoginComponent},
  {path: "register", component: RegisterComponent},

  // {path: "dashboard", component: TemplateDrivenLoginComponent, canActivate: [AuthGuard]},
  {path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path: "upload", component: UploadComponent, canActivate: [AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
