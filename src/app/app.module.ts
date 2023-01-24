import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenLoginComponent } from './login/template-driven-login/template.driven.login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveTemplateLoginComponent } from './login/reactive-driven-login/reactive.template.login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UploadComponent } from './upload/upload.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { appReducers, LoadingEffects } from './redux/loading/loading.effects'
import { RegisterComponent } from './register/register.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { JwtTokenInterceptor } from './shared/interceptor/JwtTokenInterceptor';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReactiveTemplateLoginComponent,
    UploadComponent,
    LoadingComponent,
    RegisterComponent
  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    TemplateDrivenLoginComponent,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([LoadingEffects]),
    NgMultiSelectDropDownModule.forRoot() 
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
