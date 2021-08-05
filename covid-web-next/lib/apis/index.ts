import axios, { AxiosResponse } from "axios";
import { API_KEY } from "config/config.json";

export const getAllCondition = async (): Promise<AxiosResponse> => {
  try {
    const url: string = `https://api.corona-19.kr/korea/?serviceKey=${API_KEY}`;
    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    throw e;
  }
};

export const getCountryCondition = async (): Promise<AxiosResponse> => {
  try {
    const url: string = `https://api.corona-19.kr/korea/country/new/?serviceKey=${API_KEY}`;
    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    throw e;
  }
};
