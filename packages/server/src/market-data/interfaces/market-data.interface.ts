export interface MarketDataInterface {
  getAllMarketData(): Promise<MarketDataDto[]>;
  getMarketDataBySymbol(symbol: string): Promise<MarketDataDto>;
}
