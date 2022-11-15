import { Component } from "@angular/core";
import { persons as data} from './../../data/persons';
import { IPerson } from './../../models/person';

@Component ({
  selector: 'app-summarypage',
  templateUrl: './summarypage.component.html'
})

export class SummarypageComponent {
  persons: IPerson[] = data;

  average(moneyType:string) {
    let sortedArr:any = this.persons.filter(item => item.type === moneyType);
    let result:number = sortedArr.reduce((sum:number, current:any) => sum + current.amount, 0);
    return result;
  }
}
