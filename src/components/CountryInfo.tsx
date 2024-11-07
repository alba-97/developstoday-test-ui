import { ICountry } from "@/interfaces/country";
import React from "react";
import Spinner from "./Spinner";
import Image from "next/image";
import { PopulationChart } from "./PopulationChart";

interface ICountryInfoProps {
  country?: ICountry;
  error: boolean;
}

const CountryInfo = ({ country, error }: ICountryInfoProps) => {
  if (error) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Country not found</h1>
      </div>
    );
  }
  if (!country) {
    return <Spinner />;
  }
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">{country.name}</h1>
        <div className="relative w-full flex justify-center mb-16">
          <Image
            src={country.flag}
            alt={`Flag of ${country.name}`}
            width={500}
            height={200}
            className="object-cover rounded-md"
          />
        </div>
      </div>
      <div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Bordering Countries</h2>
          <div className="flex flex-wrap gap-2">
            {country.borders.map((borderingCountry, index) => (
              <a
                href={`/${borderingCountry.countryCode}`}
                key={borderingCountry.countryCode}
                className="hover:underline"
              >
                {borderingCountry.commonName}
              </a>
            ))}
          </div>
        </div>
      </div>
      <PopulationChart populationData={country.populationCounts} />
    </div>
  );
};

export default CountryInfo;
