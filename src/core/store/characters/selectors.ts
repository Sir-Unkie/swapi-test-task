import { TRootState } from '../rootReducer';

import { ICharacter, ICharactersState } from './types';

export const selectCharactersResponse = (state: TRootState): ICharactersState | null => state.Characters.data;

export const selectCharacters = (state: TRootState): ICharacter[] | undefined => state.Characters.data?.results;

export const selectPage = (state: TRootState): number => state.Characters.currentPage;

export const selectFilter = (state: TRootState): string => state.Characters.filter;
