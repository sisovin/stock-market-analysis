import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class WatchlistItemDto {
  @IsString()
  @IsNotEmpty()
  symbol: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
