import { IHomeWorldDto, ISpeciesDto } from '@core/api/types';

import { IHomeWorldInfo, ISpeciesInfo } from './types';

export const characterHomeWorldAdapter = (homeWorldDto: IHomeWorldDto): IHomeWorldInfo => ({
  climate: homeWorldDto.climate,
  diameter: homeWorldDto.diameter,
  gravity: homeWorldDto.diameter,
  name: homeWorldDto.name,
  // eslint-disable-next-line camelcase
  orbital_period: homeWorldDto.orbital_period,
  population: homeWorldDto.population,
  url: homeWorldDto.url,
});

export const characterSpeciesAdapter = (speciesDto: ISpeciesDto):ISpeciesInfo => ({
  classification: speciesDto.classification,
  language: speciesDto.language,
  name: speciesDto.name,
  url: speciesDto.url,
  homeworld: speciesDto.homeworld,
});
