import { createGlobalStyle } from 'styled-components';

import colors from '@core/constants/colors';

export default createGlobalStyle`
  body {
    font-family: "dinpro", sans-serif;
    color: ${colors.mainBlack};
  }
`;
