import { IsString, IsNotEmpty } from 'class-validator';

export class CreateWatchlistDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;
}
