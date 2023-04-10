export interface IGetCharactersApiResponse {
  count: number;
  next?: string;
  previous?: string;
  results: ICharacterDto[];
}

export interface IGetCharacterApiResponse extends ICharacterDto { }

export interface IGetSpeciesDataApiResponse extends ISpeciesDto { }

export interface IGetHomeWorldApiResponse extends IHomeWorldDto { }

export interface ICharacterDto {
  name: string;
  height: string;
  mass: string;
  // eslint-disable-next-line camelcase
  hair_color: string;
  // eslint-disable-next-line camelcase
  skin_color: string;
  // eslint-disable-next-line camelcase
  eye_color: string;
  // eslint-disable-next-line camelcase
  birth_year: string;
  gender?: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface ISpeciesDto {
  name: string;
  classification: string;
  designation: string;
  // eslint-disable-next-line camelcase
  average_height: string;
  // eslint-disable-next-line camelcase
  skin_colors: string;
  // eslint-disable-next-line camelcase
  hair_colors: string;
  // eslint-disable-next-line camelcase
  eye_colors: string;
  // eslint-disable-next-line camelcase
  average_lifespan: string;
  homeworld?: any;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IHomeWorldDto {
  name: string;
  // eslint-disable-next-line camelcase
  rotation_period: string;
  // eslint-disable-next-line camelcase
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  // eslint-disable-next-line camelcase
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IGetCharactersApiSearchParams {
  search: string;
  page: number;
}
