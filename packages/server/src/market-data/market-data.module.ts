import { Module } from '@nestjs/common';
import { MarketDataService } from './market-data.service';
import { MarketDataController } from './market-data.controller';

@Module({
  imports: [],
  controllers: [MarketDataController],
  providers: [MarketDataService],
})
export class MarketDataModule {}
