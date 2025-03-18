import { PartialType } from '@nestjs/mapped-types';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 50)
  readonly user: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 250)
  readonly name: string;
}

export class UpdateDto extends PartialType(CreateDto) {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  id: number;
}
