import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiFetchCharacters } from '@core/api';

import type { TRootState } from '../rootReducer';

import { ICharactersState, IFetchCharactersThunkArg } from './types';
import { charactersAdapter } from './utils';

export const fetchCharacters = createAsyncThunk<ICharactersState, IFetchCharactersThunkArg, { state: TRootState }>(
  'characters/fetch-characters',
  async (thunkArgument, { rejectWithValue, signal }) => {
    try {
      const { searhParams } = thunkArgument;

      const response = await apiFetchCharacters(searhParams, signal);

      const { data } = response;
      const { results } = data;

      const adaptedCharacters = charactersAdapter(results);

      return {
        ...data,
        results: adaptedCharacters,
      };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
