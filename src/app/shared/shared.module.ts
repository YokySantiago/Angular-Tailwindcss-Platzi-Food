import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormFeedbackComponent } from './components/form-feedback/form-feedback.component';

@NgModule({
  declarations: [
    FormFeedbackComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormFeedbackComponent
  ]
})
export class SharedModule { }
