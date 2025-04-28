import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MarketDataModule } from './market-data/market-data.module';
import { WatchlistModule } from './watchlist/watchlist.module';
import { DatabaseModule } from './shared/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    MarketDataModule,
    WatchlistModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
