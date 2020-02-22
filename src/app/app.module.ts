import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ExampleFormComponent} from './example-form/example-form.component';
import {FormHelperService} from './form-validation/form-helper.service';
import {ColourFormControlDirective} from './form-validation/colour-form-control-directive';
import {AppendErrorMessageComponent} from './form-validation/append-error-message.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {ImageSelectorComponent} from './image-selector/image-selector.component';
import {HttpClientModule} from '@angular/common/http';
import {UserNameAsyncValidatorDirective} from './validators/user-name-async-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppendErrorMessageComponent,
    ColourFormControlDirective,
    DashboardComponent,
    ExampleFormComponent,
    PageNotFoundComponent,
    AppendErrorMessageComponent,
    ImageSelectorComponent,
    UserNameAsyncValidatorDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    HttpClientModule
  ],
  providers: [
    FormHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
