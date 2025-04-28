import { Injectable } from '@nestjs/common';
import { MarketDataDto } from './dto/market-data.dto';
import { MarketDataEntity } from './entities/market-data.entity';

@Injectable()
export class MarketDataService {
  private marketData: MarketDataEntity[] = [
    { symbol: 'AAPL', price: 150, volume: 1000 },
    { symbol: 'GOOGL', price: 2800, volume: 500 },
    { symbol: 'AMZN', price: 3400, volume: 300 },
  ];

  getAllMarketData(): MarketDataDto[] {
    return this.marketData.map(data => new MarketDataDto(data));
  }

  getMarketDataBySymbol(symbol: string): MarketDataDto {
    const data = this.marketData.find(data => data.symbol === symbol);
    if (!data) {
      throw new Error(`Market data for symbol ${symbol} not found`);
    }
    return new MarketDataDto(data);
  }
}
