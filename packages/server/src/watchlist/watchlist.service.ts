import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Watchlist } from './entities/watchlist.entity';
import { WatchlistItem } from './entities/watchlist-item.entity';
import { CreateWatchlistDto } from './dto/create-watchlist.dto';
import { WatchlistItemDto } from './dto/watchlist-item.dto';

@Injectable()
export class WatchlistService {
  constructor(
    @InjectRepository(Watchlist)
    private watchlistRepository: Repository<Watchlist>,
    @InjectRepository(WatchlistItem)
    private watchlistItemRepository: Repository<WatchlistItem>,
  ) {}

  create(createWatchlistDto: CreateWatchlistDto): Promise<Watchlist> {
    const watchlist = this.watchlistRepository.create(createWatchlistDto);
    return this.watchlistRepository.save(watchlist);
  }

  findAll(): Promise<Watchlist[]> {
    return this.watchlistRepository.find({ relations: ['items'] });
  }

  findOne(id: number): Promise<Watchlist> {
    return this.watchlistRepository.findOne(id, { relations: ['items'] });
  }

  async remove(id: number): Promise<void> {
    await this.watchlistRepository.delete(id);
  }

  async addItem(id: number, watchlistItemDto: WatchlistItemDto): Promise<WatchlistItem> {
    const watchlist = await this.watchlistRepository.findOne(id, { relations: ['items'] });
    const watchlistItem = this.watchlistItemRepository.create(watchlistItemDto);
    watchlist.items.push(watchlistItem);
    await this.watchlistRepository.save(watchlist);
    return this.watchlistItemRepository.save(watchlistItem);
  }

  async removeItem(id: number, itemId: number): Promise<void> {
    const watchlist = await this.watchlistRepository.findOne(id, { relations: ['items'] });
    watchlist.items = watchlist.items.filter(item => item.id !== itemId);
    await this.watchlistRepository.save(watchlist);
    await this.watchlistItemRepository.delete(itemId);
  }
}
