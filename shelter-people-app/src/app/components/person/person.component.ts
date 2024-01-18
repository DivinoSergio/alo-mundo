import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from "./../person-list/person-list.component";
import { PersonService } from './../../services/person.service';
import { Person } from '../../model/person';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from "@angular/router";

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [
    CommonModule,
    PersonListComponent,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    RouterModule
  ],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit {

  route: ActivatedRoute = inject(ActivatedRoute);

  personList: Person[] = [];
  personService: PersonService = inject(PersonService);
  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'gender', 'actions'];

  private status!: string;
  private errorMessage!: string;

  clickedRows = new Set<Person>();

  constructor() { }

  ngOnInit(): void {
    this.personService.findAll()
      .subscribe({
          next: data => {
            this.personList = data;
            this.status = 'Delete successful';
            console.error(this.status);
          },
          error: error => {
              this.errorMessage = error.message;
              console.error('There was an error!', error);
          }
      });
  }

  submitDelete(person: Person) {
    console.log(`personId: ${person.id} `);
    this.personList = this.personList.filter(item => item !== person);
    this.personService.delete(person.id);
  }
}
