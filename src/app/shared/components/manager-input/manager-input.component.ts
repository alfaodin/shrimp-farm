import { Component, forwardRef, OnInit } from '@angular/core';
import { TEXT_EMAIL } from '../../validators/customValidator';
import {
  ControlValueAccessor, FormGroup, Validators, FormBuilder,
  NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-manager-input',
  templateUrl: './manager-input.component.html',
  styleUrls: ['./manager-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ManagerInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ManagerInputComponent),
      multi: true
    }
  ]
})
export class ManagerInputComponent implements OnInit, ControlValueAccessor {

  managerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.managerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(TEXT_EMAIL)]],
    });
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    if (val) {
      this.managerForm.setValue(val, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.managerForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.managerForm.disable() : this.managerForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.managerForm.valid ? null : { invalidForm: { valid: false, message: 'Manager fields are invalid' } };
  }

}
