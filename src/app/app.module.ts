import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import {Exercise5Component} from './exercise-5/exercise-5.component';
import {FormHelperService} from "./services/form-helper.service";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Exercise5Component,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    FormHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
