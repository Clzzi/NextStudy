import axios, { AxiosResponse } from "axios";
import { API_KEY } from "config/config.json";

interface GetCountryCondition {
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

export const getAllCondition = async (): Promise<AxiosResponse> => {
  try {
    const url: string = `https://api.corona-19.kr/korea/?serviceKey=${API_KEY}`;
    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    throw e;
  }
};
