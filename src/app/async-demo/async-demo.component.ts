import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DuplicateEmailCheck } from '../duplicateEmailCheck';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-async-demo',
  templateUrl: './async-demo.component.html',
  styleUrls: ['./async-demo.component.css']
})
export class AsyncDemoComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private _userServiceObj:UserServiceService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({

      user_email: new FormControl(null, [Validators.email, Validators.required] ,DuplicateEmailCheck.checkEmail(this._userServiceObj)),
      user_password: new FormControl(null, [Validators.required] )





  });

  }
  onSubmit(){
    alert("Button Clicked")
    console.log(this.signupForm.value)
  }

}
