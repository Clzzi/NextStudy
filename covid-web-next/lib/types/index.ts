export interface GetAllCondition {
  resultCode: string;
  TotalCase: string;
  TotalRecovered: string;
  TotalDeath: string;
  NowCase: string;
  city1n: string;
  city2n: string;
  city3n: string;
  city4n: string;
  city5n: string;
  city1p: string;
  city2p: string;
  city3p: string;
  city4p: string;
  city5p: string;
  recoveredPercentage: number;
  deathPercentage: number;
  checkingCounter: string;
  checkingPercentage: string;
  caseCount: string;
  casePercentage: string;
  notcaseCount: string;
  notcasePercentage: string;
  TotalChecking: string;
  TodayRecovered: string;
  TodayDeath: string;
  TotalCaseBefore: string;
  source: string;
  updateTime: string;
  resultMessage: string;
}

interface Country {
  countryName: string;
  newCase: string;
  totalCase: string;
  recovered: string;
  death: string;
  percentage: string;
  newCcase: string;
  newFcase: string;
}

export interface GetCountryCondition {
  resultCode: string;
  resultMessage: string;
  korea: Country;
  seoul: Country;
  busan: Country;
  daegu: Country;
  incheon: Country;
  gwangju: Country;
  daejeon: Country;
  ulsan: Country;
  sejong: Country;
  gyeonggi: Country;
  gangwon: Country;
  chungbuk: Country;
  chungnam: Country;
  jeonbuk: Country;
  jeonnam: Country;
  gyeongbuk: Country;
  gyeongnam: Country;
  jeju: Country;
  quarantine: Country;
}
