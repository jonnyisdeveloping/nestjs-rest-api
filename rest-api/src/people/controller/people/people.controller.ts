import { Controller, Post, Body } from '@nestjs/common';
import { PeopleService } from 'src/people/service/people/people.service';
import { PersonCreateDto } from 'src/people/dto/person-create.dto';

@Controller('people')
export class PeopleController {
  constructor(private _peopleService: PeopleService) {}

  @Post()
  save(@Body() personCreateDto: PersonCreateDto): { ok: boolean; id: number } {
    const id = this._peopleService.save(
      personCreateDto.name,
      personCreateDto.age,
      personCreateDto.email,
    );

    return { ok: true, id };
  }
}
