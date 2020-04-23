import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit {

  constructor() { }

  signupForm: FormGroup;
ngOnInit() {
    this.signupForm = new FormGroup({
      user_name: new FormControl(null),
      user_email: new FormControl(null),
      password_group: new FormGroup({
            user_password: new FormControl(null),
            user_confirmPassword: new FormControl(null),
      }),
      user_phone: new FormControl(null),
      user_gender: new FormControl('Male'),
      user_city: new FormControl('Ahmedabad')
   });


}
onSubmit(){
  alert("Button Clicked")
  console.log(this.signupForm);
  console.log(this.signupForm.get('user_name').value);
}


}
