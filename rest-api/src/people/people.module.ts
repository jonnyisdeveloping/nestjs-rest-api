import { Module } from '@nestjs/common';
import { PeopleController } from './controller/people/people.controller';
import { PeopleService } from './service/people/people.service';

@Module({
  imports: [],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
