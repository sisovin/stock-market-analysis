import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { CreateWatchlistDto } from './dto/create-watchlist.dto';
import { WatchlistItemDto } from './dto/watchlist-item.dto';

@Controller('watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @Post()
  create(@Body() createWatchlistDto: CreateWatchlistDto) {
    return this.watchlistService.create(createWatchlistDto);
  }

  @Get()
  findAll() {
    return this.watchlistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.watchlistService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.watchlistService.remove(+id);
  }

  @Post(':id/items')
  addItem(@Param('id') id: string, @Body() watchlistItemDto: WatchlistItemDto) {
    return this.watchlistService.addItem(+id, watchlistItemDto);
  }

  @Delete(':id/items/:itemId')
  removeItem(@Param('id') id: string, @Param('itemId') itemId: string) {
    return this.watchlistService.removeItem(+id, +itemId);
  }
}
