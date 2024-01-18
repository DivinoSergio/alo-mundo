import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from './../../model/person';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent {

  @Input() person!: Person

}
