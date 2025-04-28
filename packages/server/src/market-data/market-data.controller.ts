import { Controller, Get, Param } from '@nestjs/common';
import { MarketDataService } from './market-data.service';
import { MarketDataDto } from './dto/market-data.dto';

@Controller('market-data')
export class MarketDataController {
  constructor(private readonly marketDataService: MarketDataService) {}

  @Get()
  async getAllMarketData(): Promise<MarketDataDto[]> {
    return this.marketDataService.getAllMarketData();
  }

  @Get(':symbol')
  async getMarketDataBySymbol(@Param('symbol') symbol: string): Promise<MarketDataDto> {
    return this.marketDataService.getMarketDataBySymbol(symbol);
  }
}
