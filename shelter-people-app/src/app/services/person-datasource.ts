import { CollectionViewer, DataSource } from "@angular/cdk/collections"
import { Person } from './../model/person';
import { BehaviorSubject, Observable } from "rxjs";
import { PersonService } from "./person.service";

export class PersonDataSource implements DataSource<Person> {

  private personsSubject = new BehaviorSubject<Person[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private personService: PersonService) { }

  connect(collectionViewer: CollectionViewer): Observable<readonly Person[]> {
    return this.personsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.loadingSubject.complete;
    this.personsSubject.complete;
  }

  loadPersons(personId: number, filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 3) {
    this.loadingSubject.next(true);
    this.personService
  }
}
