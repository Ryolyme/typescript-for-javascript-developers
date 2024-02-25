export {};

type Pitcher = {
  throwingSpeed:number;
}

type Batter = {
  battingAverage: number;
}

const DaimajinSasaki : Pitcher = {
  throwingSpeed : 154
}

const OchiaiHiromitsu : Batter = {
  battingAverage : 0.367
}

type TwoWayPlayer = Pitcher & Batter;

const OtaniShouhei :TwoWayPlayer = {
  throwingSpeed:165,
  battingAverage:0.286
}