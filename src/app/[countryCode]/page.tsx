"use client";

import { fetchCountry } from "@/api/country";
import Navbar from "@/components/Navbar";
import { PopulationChart } from "@/components/PopulationChart";
import Spinner from "@/components/Spinner";
import { ICountry } from "@/interfaces/country";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CountryDetail() {
  const { countryCode } = useParams();

  const [country, setCountry] = useState<ICountry>();

  const showCountry = async () => {
    const data = await fetchCountry(`${countryCode}`);
    setCountry(data);
  };

  useEffect(() => {
    showCountry();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      {country ? (
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{country.name}</h1>
            <div className="relative w-full h-48 mb-4">
              <Image
                src={country.flag}
                alt={`Flag of ${country.name}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Bordering Countries
              </h2>
              <div className="flex flex-wrap gap-2">
                {country.borders.map((borderingCountry, index) => (
                  <a
                    href={`/${borderingCountry.countryCode}`}
                    key={index}
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
      ) : (
        <Spinner />
      )}
    </div>
  );
}
