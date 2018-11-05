import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const CustomValidators = {
    onlyNumbersValidation: (control: AbstractControl): ValidationErrors => {
        if (isNaN(Number(control.value))) {
          return { onlyNumbers: true };
        }
        return null;
    },
    dateFormatValidation: (control: AbstractControl): ValidationErrors => {
        if (isNaN(Date.parse(control.value))) {
          return { invalidDate: true };
        }
        return null;
    },
    maxLengthValidation(maxLength: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors => {
            if (control.value.length > maxLength) {
                return { maxLength: true };
                }
                return null;
            };
    },
    minLengthValidation(minLength: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors => {
            if (control.value.length < minLength) {
                return { minLength: true };
                }
                return null;
            };
    }
};
