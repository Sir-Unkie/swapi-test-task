import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import CharacterDetailsCard from '@core/components/CharacterDetailsCard';
import { ROUTES } from '@core/constants/routes';
import { selectCharachterHomeWorld, selectCharachterSpecies } from '@core/store/characterDetails/selectors';
import { selectCharacters } from '@core/store/characters/selectors';
import { extractIdFromUrl } from '@core/utils/characters';

import { useFetchCharacterDetails } from './hooks';

const CharacterDetailsPage = () => {
  const navigate = useNavigate();

  const { characterId } = useParams<{ characterId: string }>();
  const charachters = useSelector(selectCharacters);

  const charachterHomeWorld = useSelector(selectCharachterHomeWorld);
  const charachterSpecies = useSelector(selectCharachterSpecies);

  const character = charachters?.find((characterItem) => extractIdFromUrl(characterItem.url) === Number(characterId));

  const goBackHandler = () => {
    navigate(ROUTES.CHARACTERS);
  };

  useFetchCharacterDetails(character);

  return (
    <>
      <IconButton onClick={goBackHandler}>
        <ArrowBack />
        Back
      </IconButton>

      {character && (
        <CharacterDetailsCard
          character={character}
          homeworld={charachterHomeWorld}
          species={charachterSpecies}
        />
      )}
    </>
  );
};

export default CharacterDetailsPage;
