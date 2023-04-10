import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EDataRequestStatus } from '../types';

import { fetchCharacterHomeWorld, fetchCharacterSpecies } from './thunks';
import { ICharacterDetailsState, IHomeWorldInfo, ISpeciesInfo } from './types';

const initialState: ICharacterDetailsState = {
  homeWorldInfo: {
    data: null,
    dataRequestStatus: EDataRequestStatus.idle,
  },
  speciesInfo: {
    data: null,
    dataRequestStatus: EDataRequestStatus.idle,
  },
};

export const characterDetailsSlice = createSlice({
  name: 'character details',
  initialState,
  reducers: {
    updateHomeWorldData: (state, { payload }: PayloadAction<IHomeWorldInfo>) => {
      state.homeWorldInfo.data = {
        ...state.homeWorldInfo.data,
        ...payload,
      };
    },
  },
  extraReducers: (builder) => {
    // start region: fetchCharacterHomeWorld
    builder.addCase(fetchCharacterHomeWorld.pending, (state) => {
      state.homeWorldInfo.dataRequestStatus = EDataRequestStatus.pending;
    });
    builder.addCase(fetchCharacterHomeWorld.fulfilled, (state, action: PayloadAction<IHomeWorldInfo>) => {
      state.homeWorldInfo.data = action.payload;
      state.homeWorldInfo.dataRequestStatus = EDataRequestStatus.fulfilled;
    });
    builder.addCase(fetchCharacterHomeWorld.rejected, (state) => {
      state.homeWorldInfo.dataRequestStatus = EDataRequestStatus.rejected;
    });
    // end region: fetchCharacterHomeWorld

    // start region: fetchCharacterSpecies
    builder.addCase(fetchCharacterSpecies.pending, (state) => {
      state.speciesInfo.dataRequestStatus = EDataRequestStatus.pending;
    });
    builder.addCase(fetchCharacterSpecies.fulfilled, (state, action: PayloadAction<ISpeciesInfo>) => {
      state.speciesInfo.data = action.payload;
      state.speciesInfo.dataRequestStatus = EDataRequestStatus.fulfilled;
    });
    builder.addCase(fetchCharacterSpecies.rejected, (state) => {
      state.speciesInfo.dataRequestStatus = EDataRequestStatus.rejected;
    });
    // end region: fetchCharacterHomeWorld
  },
});

export const { updateHomeWorldData } = characterDetailsSlice.actions;

export type TCharacterDetailsState = ReturnType<typeof characterDetailsSlice.reducer>;

export default characterDetailsSlice.reducer;
