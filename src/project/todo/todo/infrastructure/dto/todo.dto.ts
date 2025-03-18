import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { CreateDateColumn } from 'typeorm';

export class CreateDto {
  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(250)
  readonly detail: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly userId: number;

  @IsOptional()
  @IsBoolean()
  readonly completed: boolean;

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
