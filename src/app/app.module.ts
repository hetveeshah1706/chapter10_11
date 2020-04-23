import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TemplateDrivenFormDemoComponent } from './template-driven-form-demo/template-driven-form-demo.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { TemplateDrivenFormWithValidationComponent } from './template-driven-form-with-validation/template-driven-form-with-validation.component';
import { ReactiveFormWithValidationComponent } from './reactive-form-with-validation/reactive-form-with-validation.component';
import { AsyncDemoComponent } from './async-demo/async-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormDemoComponent,
    ReactiveFormDemoComponent,
    TemplateDrivenFormWithValidationComponent,
    ReactiveFormWithValidationComponent,
    AsyncDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
