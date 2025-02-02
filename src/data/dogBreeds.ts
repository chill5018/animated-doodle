import { queryOptions } from "@tanstack/react-query";
import DogBreed, { ApiDogBreed } from "../models/DogBreed";

const API_URL = 'https://api.thedogapi.com/v1/breeds'; // should be an .env variable

const fetchDogBreeds = async (): Promise<DogBreed[]> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const result = data.map((dog: ApiDogBreed) => new DogBreed(dog));

  return result;
}

export const dogBreedOptions = queryOptions({
  queryKey: ['dogBreeds'],
  queryFn: fetchDogBreeds,
  staleTime: 60000,
})
