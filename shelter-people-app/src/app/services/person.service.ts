import { Injectable } from '@angular/core';
import { Person } from './../model/person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personsUrl: string;
  private status: string;
  private errorMessage: string;

  constructor(private http: HttpClient) {
    this.personsUrl = 'http://localhost:8080/person';
    this.status = '';
    this.errorMessage = '';
  }

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl);
  }

  public findById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.personsUrl}/${id}`);
  }

  submitApplication(_id: string, _name: string, _email: string, _phone: string, _gender: string) {

    console.log(`Nome: ${_name}`);

    let person = {
      id: _id,
      name: _name,
      email: _email,
      phone: _phone,
      gender: _gender
    } as Person;

    if (_id === null) {
      this.update(person);
    } else {
      this.save(person);
    }
  }

  public update(person: Person) {
    this.http.put<any>(this.personsUrl, person).subscribe((response: any) => {
        console.log(response);
    });
  }

  public save(person: Person) {
    this.http.post<any>(this.personsUrl, person).subscribe((response: any) => {
        console.log(response);
    });
  }

  public delete(id: string) {
    this.http.delete<string>(`${this.personsUrl}/${id}`)
      .subscribe({
          next: data => {
              this.status = 'Delete successful';
              console.error(this.status);
          },
          error: error => {
              this.errorMessage = error.message;
              console.error('There was an error!', error);
          }
      });
  }

  //getPersonById(id: string): Person | undefined {
  //  return this.personList.find(person => person.id === id);
  //}

  //getAllPersons(): Person[] {
  //  return this.personList;
  //}

  //private personList: Person[] = [
  //  {
  //    id: '1',
  //    name: 'Sérgio',
  //    email: 'sergio@email.org',
  //    phone: '(11) 98765-1234',
  //    gender: 'Male',
  //  },
  //  {
  //    id: '2',
  //    name: 'Divino',
  //    email: 'divino@email.org',
  //    phone: '(61) 99764-4244',
  //    gender: 'Male',
  //  },
  //  {
  //    id: '3',
  //    name: 'Mendes',
  //    email: 'mendes@email.org',
  //    phone: '(21) 99875-1424',
  //    gender: 'Male',
  //  }
  //]
}
