import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { isDevelopment } from '@core/utils/env';

import rootReducer from './rootReducer';

const createStore = () => configureStore({
  reducer: rootReducer,
  devTools: isDevelopment(),
});

const store = createStore();

export type TStoreType = typeof store;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
