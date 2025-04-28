# Stock Market Analysis Project

## Description
This project aims to provide a comprehensive analysis of stock market data. It includes a backend server built with Nest.js, a PostgreSQL database, and a frontend client built with Next.js.

## Setup
### Root Level
- Initialize monorepo (`package.json`, `pnpm-workspace.yaml`)
- Set up `.gitignore`
- Create `README.md` with project documentation
- Configure Turborepo (optional) (`turbo.json`)

### Database Setup
- Create `docker-compose.yml` for PostgreSQL
- Write initial schema (`schema.sql`)
- Create database migrations:
  - `0001_create_initial_tables.sql`
  - `0002_add_indices.sql`
- Prepare seed data:
  - `01_users.sql`
  - `02_market_data.sql`
  - `03_watchlists.sql`
- Database initialization script (`init.sql`)

### Server (Nest.js Backend)
#### Core Setup
- Initialize Nest.js project (`nest-cli.json`)
- Configure TypeScript (`tsconfig.json`, `tsconfig.build.json`)
- Set up ESLint and Prettier (`.eslintrc.js`, `.prettierrc`)
- Environment configuration (`.env`)

#### Auth Module
- `auth.controller.ts`
- `auth.module.ts`
- `auth.service.ts`
- DTOs:
  - `login.dto.ts`
  - `register.dto.ts`
- Entities:
  - `user.entity.ts`
- Guards:
  - `jwt-auth.guard.ts`
- Strategies:
  - `jwt.strategy.ts`

#### Market Data Module
- `market-data.controller.ts`
- `market-data.module.ts`
- `market-data.service.ts`
- DTOs:
  - `market-data.dto.ts`
- Entities:
  - `market-data.entity.ts`
- Interfaces:
  - `market-data.interface.ts`

#### Watchlist Module
- `watchlist.controller.ts`
- `watchlist.module.ts`
- `watchlist.service.ts`
- DTOs:
  - `create-watchlist.dto.ts`
  - `watchlist-item.dto.ts`
- Entities:
  - `watchlist.entity.ts`
  - `watchlist-item.entity.ts`

#### Shared Modules
- Database module (`database.module.ts`)
- Utilities:
  - `api-response.ts`

#### Core Files
- `app.controller.ts`
- `app.module.ts`
- `app.service.ts`
- `main.ts`

#### Testing
- E2E test setup (`app.e2e-spec.ts`)
- Jest configuration (`jest-e2e.json`)

### Client (Next.js Frontend)
#### Core Setup
- Initialize Next.js project
- Configure:
  - `next.config.js`
  - `postcss.config.js`
  - `tailwind.config.js`
  - `tsconfig.json`
- Environment variables (`.env.local`)

## Usage
1. Clone the repository
2. Install dependencies using `pnpm install`
3. Set up the database using `docker-compose up`
4. Run database migrations and seed data
5. Start the backend server using `pnpm run dev` in the `packages/server` directory
6. Start the frontend client using `pnpm run dev` in the `packages/client` directory

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Create a new Pull Request
