'use client'
import { useSuspenseQuery } from "@tanstack/react-query";
import { dogBreedOptions } from "../data/dogBreeds";
import { Dropdown } from "../components/Dropdown";
import { DropdownOptionType } from "@/components/Dropdown/DropdownOptions";
import { Typography } from "@/components/Typography";
import { Suspense } from "react";
import React from "react";

export default function Home() {


  const dogBreeds = [
    { title: "Labrador", subTitle: "Friendly and playful" },
    { title: "Golden Retriever", subTitle: "Loyal and energetic" },
    { title: "Bulldog", subTitle: "Calm and gentle" },
  ];

  const handleSelect = (breed: DropdownOptionType) => {
    // TODO: Do something with the return value
    console.log("Selected Breed:", breed.title);
  };

  const { data } = useSuspenseQuery(dogBreedOptions);

  const options = data.map(el => el.toDropdownResult());

  return (
    <div className="flex flex-col gap-10 p-12 justify-between">
      <div className="flex flex-row justify-between">
        <Typography className="w-40">Manual Data</Typography>
        <Dropdown options={dogBreeds} onSelect={handleSelect} label="Dog Breeds" placeholder="Choose a Dog breed" />
      </div>

      <div className="flex flex-row justify-between">
        <Typography className="w-40">API Data</Typography>
        <Suspense fallback={<Typography>Loading dog breeds...</Typography>}>
          <Dropdown options={options} onSelect={handleSelect} label="Hundraser" placeholder="Velg hundrase" />
        </Suspense>
      </div>
    </div>
  );
}
