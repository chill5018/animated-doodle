interface Units {
  imperial: string;
  metric: string;
}

export interface ApiDogBreed {
  id: number;
  name: string;
  country_code: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  weight: Units;
  height: Units;
}


class DogBreed {
  id: number;
  name: string;
  countryCode: string;
  bredFor: string;
  breedGroup: string;
  lifeSpan: string;
  temperament: string[];
  origin: string[];
  referenceImageId: string;
  weight: Units;
  height: Units;

  constructor(apiData: ApiDogBreed) {
    this.id = apiData.id;
    this.name = apiData.name;
    this.countryCode = apiData.country_code;
    this.bredFor = apiData.bred_for;
    this.breedGroup = apiData.breed_group;
    this.lifeSpan = apiData.life_span;
    this.temperament = apiData.temperament
      ? apiData.temperament.split(", ").map((temperament: string) => temperament.trim())
      : [];
    this.origin = apiData.origin ? apiData.origin.split(", ").map((origin: string) => origin.trim()) : [];
    this.referenceImageId = apiData.reference_image_id;
    this.weight = apiData.weight;
    this.height = apiData.height;
  }
}

export default DogBreed;
