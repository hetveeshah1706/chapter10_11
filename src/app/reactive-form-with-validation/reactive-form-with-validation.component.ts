import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-with-validation',
  templateUrl: './reactive-form-with-validation.component.html',
  styleUrls: ['./reactive-form-with-validation.component.css']
})
export class ReactiveFormWithValidationComponent implements OnInit {
  signupForm: FormGroup;
  invalidNamesArr: string[] = ['Hello', 'Angular'];
  constructor() { }


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user_name: new FormControl(null, [Validators.required, this.invalidNameValidation.bind(this)]),
      user_email: new FormControl(null, [Validators.email, Validators.required]),



      user_phone: new FormControl(null),
      user_city: new FormControl('Ahmedabad', [Validators.required])
  });

  }
  onSubmit() {
    alert("Button Clicked")
    console.log(this.signupForm);
    console.log(this.signupForm.get('user_name').value);
  }


    invalidNameValidation(control: AbstractControl): {[key: string]: boolean} {
      if (this.invalidNamesArr.indexOf(control.value) >= 0) {
        return {invalidName: true};
      }
      return null;
  }


}
