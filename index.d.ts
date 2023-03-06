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