import { ICountry } from "@/interfaces/country";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchCountries: () => Promise<ICountry[]> = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/countries`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCountry: (countryCode: string) => Promise<ICountry> = async (
  countryCode: string
) => {
  const { data } = await axios.get(`${apiUrl}/countries/${countryCode}`);
  return data;
};
