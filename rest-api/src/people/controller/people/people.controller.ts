import { Controller, Post, Body } from '@nestjs/common';
import { PeopleService } from 'src/people/service/people/people.service';

@Controller('people')
export class PeopleController {
  constructor(private _peopleService: PeopleService) {}

  @Post()
  save(
    @Body() name: string,
    @Body() age: number,
    @Body() email: string,
  ): { ok: boolean; id: number } {
    const id = this._peopleService.save(name, age, email);

    return { ok: true, id };
  }
}
