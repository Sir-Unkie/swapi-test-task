import { IHomeWorldInfo } from '@core/store/characterDetails/types';

import { IEditHomeWorldForm } from './types';

export const formValuesAdapter = (values: IEditHomeWorldForm, name: string, url: string): IHomeWorldInfo => {
  const adapted:IHomeWorldInfo = {
    climate: values.climate,
    diameter: values.diameter.toString(),
    gravity: values.gravity.toString(),
    population: values.population.toString(),
    // eslint-disable-next-line camelcase
    orbital_period: values.orbital_period.toString(),
    name,
    url,
  };
  return adapted;
};
