import { IsNotEmpty, IsEmail, IsInt, Min } from 'class-validator';
export class PersonCreateDto {
  @IsNotEmpty({ message: 'Name is required' })
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsInt()
  @Min(1, { message: 'It needs to have at least one number' })
  readonly age: number;
}
