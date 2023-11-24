import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextInputComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: TextInputComponent,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor, Validator {
  @Input({ required: true }) type!: 'password' | 'email' | 'text';
  @Input({ required: true }) label!: string;

  textControl = new FormControl('');

  onChange = () => {};
  onTouched = () => {};

  touched = false;
  disabled = false;

  writeValue(value: string): void {
    this.textControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    console.log(disabled)
    this.disabled = disabled;
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return null;
  }
}
