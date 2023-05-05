import { Symbols, URL } from "../constants";
import { ResponseData } from "../interfaces";

export const fetchSymbols = (): Promise<ResponseData[]> => {
  return Promise.all(
    Symbols.map((symbol: string) =>
      fetch(`${URL}?symbols=${symbol}`).then((responses) => responses.json())
    )
  );
};
