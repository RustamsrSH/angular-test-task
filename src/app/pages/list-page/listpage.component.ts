import { Component, OnInit } from "@angular/core";
import { persons as data} from './../../data/persons';
import { IPerson } from './../../models/person';

@Component ({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html'
})

export class ListpageComponent {
  persons: IPerson[] = data;
  title: string = '';
  sortedPersons: any = this.persons;
  buttonClick(filterType: string) {
    this.title = filterType;
    this.sortedPersons = this.persons.filter(person => person.type === filterType);
    return this.sortedPersons;
  }


}
