import { PartialType } from '@nestjs/mapped-types';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length
} from 'class-validator';
import { CreateDateColumn } from 'typeorm';

export class CreateDto {
  @IsNotEmpty()
  @IsString()
  @Length(2,5)
  readonly code: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @Length(10 , 100)
  readonly category: string;

  @CreateDateColumn()
  createdAt: Date;

  @IsNotEmpty()
  @IsDateString()
  readonly completedAt: Date;
}

export class UpdateDto extends PartialType(CreateDto) {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  id: number;
}
