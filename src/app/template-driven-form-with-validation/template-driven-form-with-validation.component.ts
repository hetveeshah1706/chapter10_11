import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-with-validation',
  templateUrl: './template-driven-form-with-validation.component.html',
  styleUrls: ['./template-driven-form-with-validation.component.css']
})
export class TemplateDrivenFormWithValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(loginForm: NgForm) {
    alert("Button Clicked")
    console.log(loginForm);
    console.log(loginForm.value.userEmail);
}

}
