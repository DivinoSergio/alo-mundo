import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Data } from "@angular/router";
import { PersonService } from './../../services/person.service';
import { Person } from './../../model/person';
import { Observable, Subscription } from 'rxjs';
import { Gender } from "./../../model/gender";
import { RouterModule, Router } from "@angular/router";

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
import { MyErrorStateMatcher } from '../person-add/person-add.component';

@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule
  ],
  templateUrl: './person-detail.component.html',
  styleUrl: './person-detail.component.css'
})
export class PersonDetailComponent {
  form!: FormGroup;

  r: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  service: PersonService = inject(PersonService);
  person: Person | undefined;
  rotaAtual: Subscription | undefined;
  personId = -1;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  selectedGender: string = '';
  genders: Gender[] = [
    {value: 'male', viewValue: "Male"},
    {value: 'female', viewValue: "Female"}
  ];

  applyForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    email: this.emailFormControl,
    gender: new FormControl('')
  });

  constructor(private fb: FormBuilder) {
    const personId = this.route.snapshot.params['id'];
    this.service.findById(personId).subscribe(data => {
      this.person = data;

      this.applyForm = new FormGroup({
        id: new FormControl(this.person.id),
        name: new FormControl(this.person.name),
        phone: new FormControl(this.person.phone),
        email: new FormControl(this.person.email, [Validators.required, Validators.email]),
        gender: new FormControl(this.person.gender)
      });
    });
  }

  submitApplication() {
    this.service.submitApplication(
      this.applyForm.value.id ?? '',
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.phone ?? '',
      this.applyForm.value.gender ?? ''
    );
    this.navidator();
  }

  navidator() {
    this.r.navigate(['/']).then(() => {
      this.applyForm.markAsPristine();
    });
  }
}
