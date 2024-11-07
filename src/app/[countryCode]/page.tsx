"use client";

import { fetchCountry } from "@/api/country";
import CountryInfo from "@/components/CountryInfo";
import Navbar from "@/components/Navbar";
import { ICountry } from "@/interfaces/country";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CountryDetail() {
  const { countryCode } = useParams();

  const [country, setCountry] = useState<ICountry>();

  const [error, setError] = useState(false);

  const showCountry = async () => {
    try {
      const data = await fetchCountry(`${countryCode}`);
      setCountry(data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    showCountry();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <CountryInfo country={country} error={error} />
    </div>
  );
}
