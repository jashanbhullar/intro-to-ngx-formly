import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

//  Custom text field with extra classes and all
@Component({
    selector: 'app-formly-field-custom-input',
    template: `
    <label>{{ to.label }}</label>
    <input type="text" class="form-control bg-secondary text-white" [formControl]="formControl" [placeholder]="to.placeholder">
  `,
})
export class FormlyFieldTextInputComponent extends FieldType { }


// You can edit all the fields of ng-select. Showing just one here.
@Component({
    selector: 'app-formly-field-custom-select',
    template: `
    <label>{{ to.label }}</label>
      <ng-select
      [placeholder]="to.placeholder"
      [items]="to.options"
      [multiple]="to.multiple"
      [formControl]="formControl"
      >
      </ng-select>
    `,
})
export class FormlyFieldTextSelectComponent extends FieldType { }


@Component({
    selector: 'app-formly-field-custom-date',
    template: `
    <label>{{ to.label }}</label>
    <input type="text" [placeholder]="to.placeholder" [formControl]="formControl" class="form-control" bsDatepicker>
    `,
})
export class FormlyFieldTextDateComponent extends FieldType { }


@Component({
    selector: 'app-formly-field-custom-timepicker',
    template: `
    <label>{{ to.label }}</label>
    <timepicker [formControl]="formControl"></timepicker>
    `,
})
export class FormlyFieldTexTimeComponent extends FieldType { }
