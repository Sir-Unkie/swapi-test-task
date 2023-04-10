import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ROUTES } from '@core/constants/routes';
import CharacterDetailsPage from '@core/pages/CharacterDetailsPage';
import CharactersPage from '@core/pages/CharactersPage';

import Header from '../Header';
import Layout from '../Layout';

import * as UI from './styles';

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <UI.MainContainer>
      <Header />
      <Layout>

        <Routes>
          <Route element={<CharactersPage />} path={ROUTES.CHARACTERS} />
          <Route element={<CharacterDetailsPage />} path={`${ROUTES.CHARACTERS}/:characterId`} />

          <Route element={<Navigate replace to={ROUTES.CHARACTERS} />} path="/" />
          <Route element={<div>ERROR PAGE</div>} path="/*" />
        </Routes>
      </Layout>
    </UI.MainContainer>
  </Suspense>
);

export default App;
