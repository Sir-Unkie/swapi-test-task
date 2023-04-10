import { TRootState } from '../rootReducer';

import { IHomeWorldInfo, ISpeciesInfo } from './types';

export const selectCharachterHomeWorld = (state: TRootState): IHomeWorldInfo | null => state.CharacterDetails.homeWorldInfo.data;

export const selectCharachterSpecies = (state: TRootState): ISpeciesInfo | null => state.CharacterDetails.speciesInfo.data;
