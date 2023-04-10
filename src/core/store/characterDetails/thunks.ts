import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiFetchHomeWorld, apiFetchSpecies } from '@core/api';

import type { TRootState } from '../rootReducer';
import { EDataRequestStatus } from '../types';

import { IFetchCharacterHomeWorldThunkArg, IFetchCharacterSpeciesThunkArg, IHomeWorldInfo, ISpeciesInfo } from './types';
import { characterHomeWorldAdapter, characterSpeciesAdapter } from './utils';

export const fetchCharacterHomeWorld = createAsyncThunk<IHomeWorldInfo, IFetchCharacterHomeWorldThunkArg, { state: TRootState }>(
  'characterDetails/fetch-character-homeworld',
  async (thunkArgument, { rejectWithValue, signal }) => {
    try {
      const { homeWorldId } = thunkArgument;

      const { data } = await apiFetchHomeWorld(homeWorldId, signal);

      const homeWorldInfo = characterHomeWorldAdapter(data);

      return homeWorldInfo;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
  {
    condition: (_thunkArgument, { getState }) => {
      const { CharacterDetails } = getState();

      return !(CharacterDetails.homeWorldInfo?.dataRequestStatus === EDataRequestStatus.pending);
    },
  },
);

export const fetchCharacterSpecies = createAsyncThunk<ISpeciesInfo, IFetchCharacterSpeciesThunkArg, { state: TRootState }>(
  'characterDetails/fetch-character-species',
  async (thunkArgument, { rejectWithValue, signal }) => {
    try {
      const { speciesId } = thunkArgument;

      const { data } = await apiFetchSpecies(speciesId, signal);

      const speciesInfo = characterSpeciesAdapter(data);

      return speciesInfo;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
  {
    condition: (_thunkArgument, { getState }) => {
      const { CharacterDetails } = getState();

      return !(CharacterDetails.speciesInfo?.dataRequestStatus === EDataRequestStatus.pending);
    },
  },
);
