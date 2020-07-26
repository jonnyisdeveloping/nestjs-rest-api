import { Controller } from '@nestjs/common';
import { PersonModel } from 'src/people/model/person.model';

@Controller('people')
export class PeopleService {
  private people: Array<PersonModel> = [];

  save(name: string, age: number, email: string): any {
    const id = Math.random() * 10000 + 1;
    const person = new PersonModel(id, name, age, email);
    this.people.push(person);
    return id;
  }
}
