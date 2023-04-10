import { object, SchemaOf, string, number } from 'yup';

import { IEditHomeWorldForm } from '../types';

export const editHomeWorldFormSchema: SchemaOf<IEditHomeWorldForm> = object().shape({
  climate: string().required(),
  diameter: number().required(),
  gravity: number().required(),
  // eslint-disable-next-line camelcase
  orbital_period: number().required(),
  population: number().required(),
});

export const formFieldsNames = {
  climate: 'climate',
  diameter: 'diameter',
  gravity: 'gravity',
  orbitalPeriod: 'orbital_period',
  population: 'population',
};
