import { IHomeWorldDto, ISpeciesDto } from '@core/api/types';

import { IGenericStoreDataState } from '../types';

export interface ICharacterDetailsState {
  speciesInfo: IGenericStoreDataState<ISpeciesInfo>;
  homeWorldInfo: IGenericStoreDataState<IHomeWorldInfo>;
}

export interface IFetchCharacterHomeWorldThunkArg {
  homeWorldId: number;
}

export interface IFetchCharacterSpeciesThunkArg {
  speciesId: number;
}

export interface ISpeciesInfo extends Pick<ISpeciesDto,
'language'
| 'homeworld'
| 'classification'
| 'url'
| 'name'
> { }

export interface IHomeWorldInfo extends Pick<IHomeWorldDto,
'diameter'
| 'orbital_period'
| 'gravity'
| 'climate'
| 'url'
| 'population'
| 'name'
> { }
