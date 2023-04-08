import { combineReducers } from '@reduxjs/toolkit';

import { EReducersNames } from '@core/constants/reduxStore';
import mainSlice from './mainAppState';

const rootReducer = combineReducers({
  [EReducersNames.MAIN_APP_STATE]: mainSlice,

});

export default rootReducer;
