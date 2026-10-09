import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseRegistration } from '../../classes/CourseRegistration';

@Component({
  selector: 'app-course-registration-component',
  standalone: false,
  styleUrl: './course-registration-component.css',
  templateUrl: './course-registration-component.html',
})
export class CourseRegistrationComponent {
  // onSubmit(form: NgForm) {
  //   if (form.valid) {
  //     console.log('Dữ liệu khoá học:', form.value);
  //     // alert(JSON.stringify(form.value));
  //     let info = "Full name: " + form.value.fullName
  //       + "\n" + "Email: " + form.value.email
  //       + "\n" + "Phone: " + form.value.phone
  //       + "\n" + "Course: " + form.value.course
  //       + "\n" + "Shift: " + form.value.shift
  //       + "\n" + "Agree: " + form.value.agree
  //     alert(info)
  //   }
  // }

  //Khởi tạo đối tượng
  courseModel = new CourseRegistration();
  onSubmit() {
    let info = this.courseModel.getInfor()
    console.log('Dữ liệu khoá học:', info);
    alert(info)
  }
}
