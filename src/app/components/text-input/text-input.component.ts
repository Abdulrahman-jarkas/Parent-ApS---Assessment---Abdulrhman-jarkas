import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextInputComponent,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input({ required: true }) type!: 'password' | 'email' | 'text';
  @Input({ required: true }) label!: string;

  textControl = new FormControl('',[Validators.required]);

  onChange = () => {};
  onTouched = () => {};

  touched = false;
  disabled = false;

  ngOnInit() {
    if (this.type === 'email') {
      this.textControl.addValidators(Validators.email);
    }
  }

  writeValue(value: string): void {
    this.textControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.textControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
