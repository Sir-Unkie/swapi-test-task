import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ROUTES } from '@core/constants/routes';

import * as UI from './styles';

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <UI.MainContainer>
      <Routes>
        <Route element={<div>Route1</div>} path={ROUTES.ROUTE1} />
        <Route element={<div>Route2</div>} path={ROUTES.ROUTE2} />

        {/* TODO: remopve if not needed */}
        <Route element={<Navigate replace to={ROUTES.ROUTE1} />} path="/" />
        {/* TODO zhdi: add proper Error page */}
        <Route element={<div>ERROR PAGE</div>} path="/*" />
      </Routes>

    </UI.MainContainer>
  </Suspense>
);

export default App;
