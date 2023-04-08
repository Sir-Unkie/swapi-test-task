import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMainState } from './types';

const initialState: IMainState = {
  state: 'initial state'
};

export const mainSlice = createSlice({
  name: 'main slice',
  initialState,
  reducers: {
    defaultreducer: (state, { payload }: PayloadAction<string>) => {
      return {state: payload}
    },
  },

});

export const {
  defaultreducer,
} = mainSlice.actions;

export type TUserState = ReturnType<typeof mainSlice.reducer>;

export default mainSlice.reducer;
