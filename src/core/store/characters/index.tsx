import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EDataRequestStatus, IGenericStoreDataStateWithPage } from '../types';

import { fetchCharacters } from './thunks';
import { ICharactersState } from './types';

const initialState: IGenericStoreDataStateWithPage<ICharactersState> = {
  data: null,
  dataRequestStatus: EDataRequestStatus.idle,
  currentPage: 0,
  filter: '',
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
    setFilter: (state, { payload }: PayloadAction<string>) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.dataRequestStatus = EDataRequestStatus.pending;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action: PayloadAction<ICharactersState>) => {
      state.data = action.payload;
      state.dataRequestStatus = EDataRequestStatus.fulfilled;
    });
    builder.addCase(fetchCharacters.rejected, (state) => {
      state.dataRequestStatus = EDataRequestStatus.rejected;
    });
  },
});

export const {
  setPage,
  setFilter,
} = charactersSlice.actions;

export type TCharactersState = ReturnType<typeof charactersSlice.reducer>;

export default charactersSlice.reducer;
