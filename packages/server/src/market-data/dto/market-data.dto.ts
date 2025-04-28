export class MarketDataDto {
  symbol: string;
  price: number;
  volume: number;

  constructor(data: { symbol: string; price: number; volume: number }) {
    this.symbol = data.symbol;
    this.price = data.price;
    this.volume = data.volume;
  }
}
