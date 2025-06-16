import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsPositive,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateSessionDto {
  @IsString()
  language: string;

  @IsString()
  format: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsDateString()
  @IsNotEmpty()
  dateTime: string;

  @IsInt()
  @IsPositive()
  movieId: number;

  @IsInt()
  @IsPositive()
  theaterId: number;
}
