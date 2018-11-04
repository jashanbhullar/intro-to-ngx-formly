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
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { BasicFormlyComponent } from './basic-formly/basic-formly.component';
import { CustomTemplateFormlyComponent } from './custom-template-formly/custom-template-formly.component';
import { FormlyWrapperAccordianComponent } from './custom-wrapper';
import {
  FormlyFieldTextInputComponent,
  FormlyFieldTextSelectComponent,
  FormlyFieldTextDateComponent,
  FormlyFieldTexTimeComponent
} from './custom-types';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormlyComponent,
    CustomTemplateFormlyComponent,
    FormlyFieldTextInputComponent,
    FormlyFieldTextSelectComponent,
    FormlyFieldTextDateComponent,
    FormlyFieldTexTimeComponent,
    FormlyWrapperAccordianComponent
  ],
  imports: [
    BrowserModule,
    //  Needed for formly as it creates reactive forms
    ReactiveFormsModule,

    // Initizalie the formly module
    // pass some custom configuration
    // This config can also be done per child with
    // FormlyModule.forChild()
    FormlyModule.forRoot({
      //  These work on the 'type' keyword
      types: [
        {
          name: 'custom-text',
          component: FormlyFieldTextInputComponent
        },
        {
          name: 'custom-select',
          component: FormlyFieldTextSelectComponent
        },
        {
          name: 'custom-date',
          component: FormlyFieldTextDateComponent
        },
        {
          name: 'custom-time',
          component: FormlyFieldTexTimeComponent
        }
      ],
      wrappers: [
        {
          name: 'accordian',
          component: FormlyWrapperAccordianComponent
        }
      ]
    }),
    FormlyBootstrapModule,

    // Some ngx-bootstrap to implement using formly
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    NgSelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
