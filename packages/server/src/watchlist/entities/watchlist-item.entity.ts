import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Watchlist } from './watchlist.entity';

@Entity()
export class WatchlistItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  symbol: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @ManyToOne(() => Watchlist, (watchlist) => watchlist.items)
  watchlist: Watchlist;
}
