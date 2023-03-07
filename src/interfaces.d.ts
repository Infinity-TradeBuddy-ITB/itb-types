import {
  MarketHoursType,
  OptionType,
  Pattern,
  PatternDetected,
  QuoteType,
  StockEventType,
  StockTicker
} from './enums';

export interface Fluctuation {
  time: number;
  value: number;
}

export interface PeriodFluctuation {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface MovingAverage {
  time: number;
  average: number;
}

export interface MovingAverageClass {
  data: number[];
  slowWindow: number;
  fastWindow: number;
  slowAverage: number;
  fastAverage: number;
  prevSlowAverage: number;
  prevFastAverage: number;
  buyFlag: boolean;
  sellFlag: boolean;
  sealing: number;
  floor: number;
}

export interface PatternResponse {
  pattern: Pattern;
  detected: PatternDetected;
}

export interface OrderedFlucts {
  flucts: number;
  moment: Date;
}


export interface BuysAndSells {
  type: string;
  index: number;
  currPrice: number;
  timeStamp: Date;
}

export interface Fluctuations {
  type: string;
  index: number;
  currPrice: number;
  timeStamp: Date;
}

export interface StockEvent {
  event: StockEventType;
  symbol: StockTicker;
}

export interface Stock {
  breakPoint: Date;
  closingTime?: Date;

  // start values
  startFounds: number;
  founds: number;
  currFounds: number;

  // flags
  stockName: string;
  holding: boolean;
  reasonable: boolean;

  // sells
  currPossibleWin: number;
  lastSell: number;

  // fluctuations
  openValue: number;
  minFluct: number;
  maxFluct: number;
  prevFluct: number;
  currFluct: number;

  // counters
  index: number;
  total: number;
  tradeCount: number;
  positiveCounter: number;
  negativeCounter: number;
  transactionsNumber: number;

  // arrays for data control
  currFoundsBellowStartVal: number[];
  buysAndSells: BuysAndSells[];
  positiveFluctuations: Fluctuations[];
  negativeFluctuations: Fluctuations[];
  sells: number[];
  closeValues: number[];

  // holds
  holds: number[];

  // exited
  exited: boolean;

  // log
  log: string;
}


export interface YPriceData {
  id?: string;
  price?: number;
  time?: number;
  currency?: string;
  exchange?: string;
  quoteType?: QuoteType;
  marketHours?: MarketHoursType;
  changePercent?: number;
  dayVolume?: number;
  dayHigh?: number;
  dayLow?: number;
  change?: number;
  shortName?: string;
  expireDate?: number;
  openPrice?: number;
  previousClose?: number;
  strikePrice?: number;
  underlyingSymbol?: string;
  openInterest?: number;
  optionsType?: OptionType;
  miniOption?: number;
  lastSize?: number;
  bid?: number;
  bidSize?: number;
  ask?: number;
  askSize?: number;
  priceHint?: number;
  vol_24hr?: number;
  volAllCurrencies?: number;
  fromcurrency?: string;
  lastMarket?: string;
  circulatingSupply?: number;
  marketcap?: number
}


// TODO: clean up

export interface SubscribedStocksEvent {
  event: StockEventType.SUBSCRIBE;
  symbols: StockTicker[];
}

export interface UnsubscribeStockEvent {
  event: StockEventType.UNSUBSCRIBE;
  symbol: StockTicker;
}

export interface StockEvent {
  event: StockEventType;
  symbol: StockTicker;
}