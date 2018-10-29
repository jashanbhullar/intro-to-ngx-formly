import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import {
  AccordionModule,
  BsDatepickerModule,
  TimepickerModule
} from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { BasicFormlyComponent } from './basic-formly/basic-formly.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormlyComponent
  ],
  imports: [
    BrowserModule,
    //  Needed for formly as it creates reactive forms
    ReactiveFormsModule,

    // Initizalie the formly module
    // pass some custom configuration
    FormlyModule.forRoot(),
    FormlyBootstrapModule,

    // Some ngx-bootstrap to implement using formly
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
