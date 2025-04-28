-- Database initialization script

-- Run schema file
\i schema.sql

-- Run migration files
\i migrations/0001_create_initial_tables.sql
\i migrations/0002_add_indices.sql

-- Run seed files
\i seeds/01_users.sql
\i seeds/02_market_data.sql
\i seeds/03_watchlists.sql
