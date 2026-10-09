import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-registration-reactive-component',
  standalone: false,
  styleUrl: './course-registration-reactive-component.css',
  templateUrl: './course-registration-reactive-component.html',
})
export class CourseRegistrationReactiveComponent {
  public regForm: FormGroup = new FormGroup(
    {
      name: new FormControl('Trần Duy Thanh',
        [Validators.required, Validators.minLength(3), this.customNameValidator]),
      email: new FormControl('thanhtd@uel.edu.vn',
        [Validators.required, Validators.email]),
      password: new FormControl('',
        [Validators.required, Validators.minLength(8),
        this.strongPasswordValidator
        ]),
      confirmPass: new FormControl('',
        [Validators.required])
    },
    {
      validators: this.passwordMatchValidator // Pass the cross-field validator to the form group
    }
  );
  setDefaultValues() {
    this.regForm.patchValue({
      name: 'Trần Duy Thanh',
      email: 'thanhtd@uel.edu.vn'
    });
  };
  customNameValidator(control: AbstractControl): { [key: string]: any } | null {
    const matchName = /[@#$%^&]/g.test(control.value);
    return matchName ? {
      'nameNotMatch': { value: control.value }
    } : null;
  };
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPass = control.get('confirmPass');

    if (password && confirmPass && password.value !== confirmPass.value) {
      return { mismatch: true }; // Trả về lỗi mismatch cho cả FormGroup
    }
    return null;
  };
  onSubmit() {
    if (this.regForm.valid) {
      console.log('Dữ liệu gửi đi:', this.regForm.value);
      let infor = JSON.stringify(this.regForm.value);
      alert("Xử lý dữ liệu:\n" + infor)
    }
  };
  strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return null;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = passwordRegex.test(value);
    return isValid ? null : { strongPassword: true };
  }
}
