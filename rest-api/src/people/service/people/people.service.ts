import { Controller } from '@nestjs/common';
import { PersonModel } from 'src/people/model/person.model';

@Controller('people')
export class PeopleService {
  private people: Array<PersonModel> = [];

  save(name: string, age: number, email: string): any {
    const id: number = Math.floor(Math.random() * 10000 + 1);
    const person = new PersonModel(id, name, age, email);
    this.people.push(person);
    return id;
  }

  list(): Array<PersonModel> {
    // Let's return a copy, so, in case, for any reason, the controller edits the array, it edits the copy and not the original
    return [...this.people];
  }

  getPerson(id: number) {
    const data = this.searchPerson(id);
    if (data === null) return null;
    // Let's return a copy as well
    return { ...data.person };
  }

  edit(id: number, name: string, age: number, email: string): boolean {
    const data = this.searchPerson(id);
    if (data === null) return null;
    const person = this.people[data.index];
    if (name != null) {
      person.name = name;
    }
    if (age != null) {
      person.age = age;
    }
    if (email != null) {
      person.email = email;
    }
    this.people[data.index] = person;
    return true;
  }

  searchPerson(id: number): { person: PersonModel; index: number } {
    const index = this.people.findIndex(e => e.id === id);
    if (index === -1) return null;

    const person = this.people[index];
    return { person, index };
  }
}
