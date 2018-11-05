import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../utils/validator';

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
  public lengthControl = new FormControl('', [Validators.required, CustomValidators.onlyNumbersValidation]);

  public onChange: any = () => {};
  public onTouched: any = () => {};

  public get value(): number {
    return this.lengthControl.value;
  }

  public set value(value) {
    this.lengthControl.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  public registerOnChange(fn): void {
    this.onChange = fn;
  }

  public writeValue(value): void {
    if (value) {
      this.lengthControl.setValue(value);
    }
  }

  public registerOnTouched(fn): void {
    this.onTouched = fn;
  }

}
