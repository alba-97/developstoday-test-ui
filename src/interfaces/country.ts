export interface ICountry {
  name: string;
  countryCode: string;
  flag: string;
  borders: { commonName: string; countryCode: string }[];
  populationCounts: { year: number; value: number }[];
  status?: number;
}
