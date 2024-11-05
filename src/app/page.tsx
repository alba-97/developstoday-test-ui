"use client";

import { fetchCountries } from "@/api/country";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import { ICountry } from "@/interfaces/country";
import { useEffect, useState } from "react";

export default function CountryList() {
  const [countries, setCountries] = useState<ICountry[]>([]);

  const listCountries = async () => {
    const data = await fetchCountries();
    setCountries(data);
  };

  useEffect(() => {
    listCountries();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6 text-center">List of Countries</h1>

      {countries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {countries.map((country, index) => (
            <a
              key={index}
              href={`/${country.countryCode}`}
              className="bg-[#f5f5f5] border border-gray-700 hover:shadow-lg transition-shadow duration-300 rounded-lg p-4"
            >
              <h1 className="text-3xl">{country.name}</h1>
            </a>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
