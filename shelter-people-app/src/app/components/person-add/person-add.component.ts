import { Component, inject, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { PersonService } from './../../services/person.service';
import { Gender } from "./../../model/gender";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ErrorStateMatcher, MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-person-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule
  ],
  templateUrl: './person-add.component.html',
  styleUrl: './person-add.component.css'
})
export class PersonAddComponent {
  form!: FormGroup;

  route: ActivatedRoute = inject(ActivatedRoute);
  service: PersonService = inject(PersonService);

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  selectedGender: string = '';
  genders: Gender[] = [
    {value: 'male', viewValue: "Male"},
    {value: 'female', viewValue: "Female"}
  ];

  constructor(private fb: FormBuilder) {}

  //get phoneError() {
  //  return this.applyForm!.get('phone')!.errors;
  //}

  //_keyPress(event: any) {
  //  const pattern = /[0-9]/;
  //  let inputChar = String.fromCharCode(event.charCode);
  //  if (!pattern.test(inputChar)) {
  //      event.preventDefault();
  //  }
  //}

  applyForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    email: this.emailFormControl,
    gender: new FormControl('')
  });

  submitApplication() {
    this.service.submitApplication(
      this.applyForm.value.id ?? '',
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.phone ?? '',
      this.applyForm.value.gender ?? ''
    );
    this.applyForm.reset();
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
