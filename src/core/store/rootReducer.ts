import { combineReducers } from '@reduxjs/toolkit';

import { EReducersNames } from '@core/constants/reduxStore';

import characterDetails from './characterDetails';
import characters from './characters';

const rootReducer = combineReducers({
  [EReducersNames.CHARACTERS]: characters,
  [EReducersNames.CHARACTER_DETAILS]: characterDetails,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
