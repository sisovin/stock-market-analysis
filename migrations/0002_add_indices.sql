-- Add indices for performance optimization

CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);

CREATE INDEX idx_market_data_symbol_date ON market_data(symbol, date);

CREATE INDEX idx_watchlists_user_id ON watchlists(user_id);

CREATE INDEX idx_watchlist_items_watchlist_id ON watchlist_items(watchlist_id);
