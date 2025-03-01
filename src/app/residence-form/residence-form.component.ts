import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-residence-form',
  templateUrl: './residence-form.component.html',
  styleUrls: ['./residence-form.component.css']
})
export class ResidenceFormComponent {
  residenceForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.residenceForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      image: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.residenceForm.value);
  }

  get name() {
    return this.residenceForm.get('name');
  }

  test() {
    console.log(this.residenceForm.get('name')?.value);
  }
}
