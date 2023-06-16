import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { IFormFilter } from './../models/form-filter.model';
@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  constructor() {}

  public filterValidator() : ValidatorFn{
    return (control:AbstractControl<IFormFilter>) : ValidationErrors | null => {

      let id = control.value.id
      let textSearch = control.value.text

      if (!id && !textSearch) {
        return null;
      }

      if ((id && typeof(id) != 'number') || (textSearch && typeof(textSearch) != 'string')){
        return {incorrect_format: true};
      }

      return null;
    }
 };
}