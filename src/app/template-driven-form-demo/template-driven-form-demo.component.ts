import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-demo',
  templateUrl: './template-driven-form-demo.component.html',
  styleUrls: ['./template-driven-form-demo.component.css']
})
export class TemplateDrivenFormDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(loginForm: NgForm) {
    alert("Button Clicked")
    console.log(loginForm);
    console.log(loginForm.value.userEmail);
}


}
