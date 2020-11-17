import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  /**
   * this allow build form validations for contact us
   *
   * @author Santiago Botero Ruiz
   */
  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(150)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(150)
        ]
      ],
      feedback: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(1000)
        ]
      ],
    });
  }

  public save(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      this.form.reset();
    }
  }

  /**
   * This one get feedback name of form
   */
  get nameField(): AbstractControl {
    return this.form.get('name');
  }
  /**
   * This one get email field of form
   */
  get emailField(): AbstractControl {
    return this.form.get('email');
  }
  /**
   * This one get feedback field of form
   */
  get feedbackField(): AbstractControl {
    return this.form.get('feedback');
  }
}
