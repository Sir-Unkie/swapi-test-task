import axios from 'axios';

import { SWAPI_BASE_URL } from '@core/constants/api';

export const http = axios.create({
  baseURL: SWAPI_BASE_URL,
});
