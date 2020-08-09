import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  HttpException,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { PeopleService } from 'src/people/service/people/people.service';
import { PersonCreateDto } from 'src/people/dto/person-create.dto';
import { PersonModel } from 'src/people/model/person.model';
import { PersonEditDto } from 'src/people/dto/person-edit.dto';

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

  @Get()
  list(): Array<PersonModel> {
    return this._peopleService.list();
  }

  @Get(':id')
  listSinglePerson(@Param('id') id: string) {
    const idToNumber: number = parseInt(id);
    const response = this._peopleService.getPerson(idToNumber);
    if (response == null) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Person not found',
        },
        404,
      );
    }

    return response;
  }

  @Patch(':id')
  edit(@Param('id') id: string, @Body() personEditDto: PersonEditDto) {
    const idToNumber: number = parseInt(id);
    const response = this._peopleService.edit(
      idToNumber,
      personEditDto.name,
      personEditDto.age,
      personEditDto.email,
    );
    if (response == null) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Person not found',
        },
        404,
      );
    }

    return {
      ok: true,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const idToNumber: number = parseInt(id);
    const response = this._peopleService.delete(idToNumber);
    if (response == null) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Person not found',
        },
        404,
      );
    }

    return {
      ok: true,
    };
  }
}
