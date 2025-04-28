import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { WatchlistItem } from './watchlist-item.entity';

@Entity()
export class Watchlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => WatchlistItem, (item) => item.watchlist, { cascade: true })
  items: WatchlistItem[];
}
