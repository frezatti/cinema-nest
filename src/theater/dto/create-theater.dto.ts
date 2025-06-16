import { IsString, IsNotEmpty, IsInt, IsPositive } from 'class-validator';

export class CreateTheaterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  capacity: number;

  @IsString()
  type: string;
}
