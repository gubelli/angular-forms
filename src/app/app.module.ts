import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ExampleFormComponent} from './example-form/example-form.component';
import {FormHelperService} from "./form-validation/form-helper.service";
import {ColourFormControlDirective} from "./form-validation/colour-form-control-directive";
import {AppendErrorMessageComponent} from './form-validation/append-error-message.component';


@NgModule({
  declarations: [
    AppComponent,
    AppendErrorMessageComponent,
    ColourFormControlDirective,
    DashboardComponent,
    ExampleFormComponent,
    PageNotFoundComponent,
    AppendErrorMessageComponent
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
