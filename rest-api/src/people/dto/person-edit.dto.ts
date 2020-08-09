import { IsEmail, IsOptional } from 'class-validator';
export class PersonEditDto {
  readonly name: string;

  @IsOptional()
  @IsEmail()
  readonly email: string;

  readonly age: number;
}
