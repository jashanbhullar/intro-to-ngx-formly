import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-template-formly',
  templateUrl: './custom-template-formly.component.html'
})
export class CustomTemplateFormlyComponent {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'custom-text',
      templateOptions: {
        label: 'Custom text field',
        placeholder: 'Custom text placeholder',
        required: true,
      },
    },
    {
      key: 'select',
      type: 'custom-select',
      templateOptions: {
        label: 'Custom Select field with ng-select',
        placeholder: 'Custom select placeholder',
        required: true,
        multiple: false, // make true to select multilple options
        options: [
          { label: 'Value 1', value: 1},
          { label: 'Value 2', value: 2}
        ]
      },
    },
    {
      key: 'date',
      type: 'custom-date',
      templateOptions: {
        label: 'Custom date field with ngx datepicker',
        placeholder: 'Custom date placeholder',
        required: true,
      },
    },
    {
      key: 'date',
      type: 'custom-time',
      templateOptions: {
        label: 'Custom time picker field with ngx timepicker',
        required: true
      },
    }
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }

}
