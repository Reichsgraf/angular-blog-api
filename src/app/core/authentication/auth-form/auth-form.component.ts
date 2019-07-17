import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  templateUrl: 'auth-form.component.html'
})
export class AuthFormComponent implements OnInit {
  formSubmitted = false;
  form: FormGroup;

  @Output()
  submitted = new EventEmitter<FormGroup>();

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4)
      ]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
      this.formSubmitted = false;
    } else {
      this.formSubmitted = true;
    }
  }

  get emailFormat() {
    const control = this.form.get('email');
    return (control.hasError('required') ||
      control.hasError('pattern')) &&
      control.touched;
  }

  get passwordInvalid() {
    const control = this.form.get('password');
    return (control.hasError('required') ||
      control.hasError('minlength')) &&
      control.touched;
  }

}
