import { useEffect } from 'react';

import { useAppDispatch } from '@core/store';
import { fetchCharacterHomeWorld, fetchCharacterSpecies } from '@core/store/characterDetails/thunks';
import { ICharacter } from '@core/store/characters/types';
import { extractIdFromUrl } from '@core/utils/characters';

export const useFetchCharacterDetails = (character?: ICharacter) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!character) {
      return;
    }

    const homeWorldId = extractIdFromUrl(character.homeworld);
    const speciesId = character.species.length > 0 && extractIdFromUrl(character.species[0]);

    dispatch(fetchCharacterHomeWorld({ homeWorldId }));
    if (speciesId) {
      dispatch(fetchCharacterSpecies({ speciesId }));
    }
  }, [character, dispatch]);
};
