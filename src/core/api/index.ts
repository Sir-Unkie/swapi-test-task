import { GenericAbortSignal } from 'axios';

import { http } from '@core/services/http';

import { IGetCharactersApiResponse, IGetCharactersApiSearchParams, IGetHomeWorldApiResponse, IGetSpeciesDataApiResponse } from './types';

export const apiFetchCharacters = (
  serachParams?: IGetCharactersApiSearchParams,
  signal?: GenericAbortSignal,
) => http.get<IGetCharactersApiResponse>('/people', { params: serachParams, signal });

export const apiFetchSpecies = (
  id: number,
  signal?: GenericAbortSignal,
) => http.get<IGetSpeciesDataApiResponse>(`/species/${id}`, { signal });

export const apiFetchHomeWorld = (
  id: number,
  signal?: GenericAbortSignal,
) => http.get<IGetHomeWorldApiResponse>(`/planets/${id}`, { signal });
