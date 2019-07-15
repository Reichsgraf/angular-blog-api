import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  templateUrl: 'auth-form.component.html'
})
export class AuthFormComponent {
  authInvalid = false;

  @Output()
  submitted = new EventEmitter<FormGroup>();

  form = this.fb.group({
    email: ['', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$')
    ])],
    password: ['', Validators.compose([
      Validators.required,
      Validators.minLength(4)
    ])]
  });

  constructor(
    private fb: FormBuilder
  ) {}

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
      this.authInvalid = false;
    } else {
      this.authInvalid = true;
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
