export enum PatternType {
	FALLING = 0,
	RISING = 1
}

export enum PatternDetected {
	NO = 0,
	YES = 1
}

export enum Pattern {
	HEAD_AND_SHOULDERS = PatternType.FALLING,
	INVERTED_HEAD_AND_SHOULDERS = PatternType.RISING,
	BULLISH_FLAG = PatternType.RISING,
	BEARISH_FLAG = PatternType.FALLING,
	DOUBLE_BOTTOM = PatternType.FALLING,
	DOUBLE_TOP = PatternType.RISING,
	TRIPLE_BOTTOM = PatternType.FALLING,
	TRIPLE_TOP = PatternType.RISING,
	UPTREND_RISING_WEDGE = PatternType.FALLING,
	UPTREND_FALLING_WEDGE = PatternType.RISING,
	DOWNTREND_RISING_WEDGE = PatternType.FALLING,
	DOWNTREND_FALLING_WEDGE = PatternType.RISING
}

export enum StockEventType {
  SUBSCRIBE = "sub",
  UNSUBSCRIBE = "unsub"
}

export enum StockTicker {
  RRRP3_SA = "RRRP3.SA",
  ALPA4_SA = "ALPA4.SA",
  ABEV3_SA = "ABEV3.SA",
  AMER3_SA = "AMER3.SA",
  ARZZ3_SA = "ARZZ3.SA",
  ASAI3_SA = "ASAI3.SA",
  AZUL4_SA = "AZUL4.SA",
  B3SA3_SA = "B3SA3.SA",
  BPAN4_SA = "BPAN4.SA",
  BBSE3_SA = "BBSE3.SA",
  BBDC3_SA = "BBDC3.SA",
  BBDC4_SA = "BBDC4.SA",
  BRAP4_SA = "BRAP4.SA",
  BBAS3_SA = "BBAS3.SA",
  BRKM5_SA = "BRKM5.SA",
  BRFS3_SA = "BRFS3.SA",
  BPAC11_SA = "BPAC11.SA",
  CRFB3_SA = "CRFB3.SA",
  CCRO3_SA = "CCRO3.SA",
  CMIG4_SA = "CMIG4.SA",
  CIEL3_SA = "CIEL3.SA",
  COGN3_SA = "COGN3.SA",
  CSAN3_SA = "CSAN3.SA",
  CPFE3_SA = "CPFE3.SA",
  CMIN3_SA = "CMIN3.SA",
  CVCB3_SA = "CVCB3.SA",
  CYRE3_SA = "CYRE3.SA",
  DXCO3_SA = "DXCO3.SA",
  ECOR3_SA = "ECOR3.SA",
  ELET3_SA = "ELET3.SA",
  ELET6_SA = "ELET6.SA",
  EMBR3_SA = "EMBR3.SA",
  ENBR3_SA = "ENBR3.SA",
  ENGI11_SA = "ENGI11.SA",
  ENEV3_SA = "ENEV3.SA",
  EGIE3_SA = "EGIE3.SA",
  EQTL3_SA = "EQTL3.SA",
  EZTC3_SA = "EZTC3.SA",
  FLRY3_SA = "FLRY3.SA",
  GGBR4_SA = "GGBR4.SA",
  GOAU4_SA = "GOAU4.SA",
  GOLL4_SA = "GOLL4.SA",
  NTCO3_SA = "NTCO3.SA",
  SOMA3_SA = "SOMA3.SA",
  HAPV3_SA = "HAPV3.SA",
  HYPE3_SA = "HYPE3.SA",
  IGTI11_SA = "IGTI11.SA",
  ITSA4_SA = "ITSA4.SA",
  ITUB4_SA = "ITUB4.SA",
  JBSS3_SA = "JBSS3.SA",
  KLBN11_SA = "KLBN11.SA",
  RENT3_SA = "RENT3.SA",
  LWSA3_SA = "LWSA3.SA",
  LREN3_SA = "LREN3.SA",
  MGLU3_SA = "MGLU3.SA",
  MRFG3_SA = "MRFG3.SA",
  CASH3_SA = "CASH3.SA",
  BEEF3_SA = "BEEF3.SA",
  MRVE3_SA = "MRVE3.SA",
  MULT3_SA = "MULT3.SA",
  PCAR3_SA = "PCAR3.SA",
	PETR3_SA = "PETR3.SA",
	PETR4_SA = "PETR4.SA",
	PRIO3_SA = "PRIO3.SA",
  PETZ3_SA = "PETZ3.SA",
  QUAL3_SA = "QUAL3.SA",
  RADL3_SA = "RADL3.SA",
  RAIZ4_SA = "RAIZ4.SA",
  RDOR3_SA = "RDOR3.SA",
  RAIL3_SA = "RAIL3.SA",
  SBSP3_SA = "SBSP3.SA",
  SANB11_SA = "SANB11.SA",
  SMTO3_SA = "SMTO3.SA",
  CSNA3_SA = "CSNA3.SA",
  SLCE3_SA = "SLCE3.SA",
  SUZB3_SA = "SUZB3.SA",
  TAEE11_SA = "TAEE11.SA",
  VIVT3_SA = "VIVT3.SA",
  TIMS3_SA = "TIMS3.SA",
  TOTS3_SA = "TOTS3.SA",
  UGPA3_SA = "UGPA3.SA",
  USIM5_SA = "USIM5.SA",
  VALE3_SA = "VALE3.SA",
  VIIA3_SA = "VIIA3.SA",
  VBBR3_SA = "VBBR3.SA",
  WEGE3_SA = "WEGE3.SA",
  YDUQ3_SA = "YDUQ3.SA"
} 

export enum QuoteType {
  NONE = 0,
  ALTSYMBOL = 5,
  HEARTBEAT = 7,
  EQUITY = 8,
  INDEX = 9,
  MUTUALFUND = 11,
  MONEYMARKET = 12,
  OPTION = 13,
  CURRENCY = 14,
  WARRANT = 15,
  BOND = 17,
  FUTURE = 18,
  ETF = 20,
  COMMODITY = 23,
  ECNQUOTE = 28,
  CRYPTOCURRENCY = 41,
  INDICATOR = 42,
  INDUSTRY = 1000
}

export enum OptionType {
  CALL = 0,
  PUT = 1
}

export enum MarketHoursType {
  PRE_MARKET = 0,
  REGULAR_MARKET = 1,
  POST_MARKET = 2,
  EXTENDED_HOURS_MARKET = 3
}

/////////


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