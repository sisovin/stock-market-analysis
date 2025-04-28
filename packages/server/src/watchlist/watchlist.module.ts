import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WatchlistService } from './watchlist.service';
import { WatchlistController } from './watchlist.controller';
import { Watchlist } from './entities/watchlist.entity';
import { WatchlistItem } from './entities/watchlist-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Watchlist, WatchlistItem])],
  controllers: [WatchlistController],
  providers: [WatchlistService],
})
export class WatchlistModule {}
