import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

export const FORM_DURATION_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormDurationComponent),
  multi: true,
};

@Component({
  selector: 'at-form-duration',
  templateUrl: './form-duration.component.html',
  styleUrls: ['./form-duration.component.scss'],
  providers: [FORM_DURATION_VALUE_ACCESSOR]
})
export class FormDurationComponent implements ControlValueAccessor {
  onChange: any = () => {};
  onTouched: any = () => {};

  private lengthValidation = (control: AbstractControl): ValidationErrors => {
    if (isNaN(Number(control.value))) return { length: 'Must be only numbers' };
    return null;
  }

  public lengthControl = new FormControl('', [Validators.required, this.lengthValidation]);

  get value() {
    return this.lengthControl.value;
  }

  set value(value) {
    this.lengthControl.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) this.lengthControl.setValue(value);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
