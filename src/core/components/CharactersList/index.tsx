import { ROUTES } from '@core/constants/routes';
import { extractIdFromUrl } from '@core/utils/characters';

import ListItem from '../ListItem';

import * as UI from './styles';
import { ICharactersListProps } from './types';
import { dummyBodyText } from './utils';

const CharactersList = (props: ICharactersListProps) => {
  const { data: characters } = props;

  return (
    <UI.Wrapper>
      {characters.map((character) => {
        const characterId = extractIdFromUrl(character.url);
        const filmsAmount = character.films.length;

        return (
          <ListItem
            bodyText={dummyBodyText}
            bottomText={`Movies amount: ${filmsAmount}`}
            headerText={`Character #${characterId}`}
            key={characterId}
            routeToVavigate={`${ROUTES.CHARACTERS}/${characterId}`}
            titleText={`Name: ${character.name}`}
          />
        );
      })}
    </UI.Wrapper>
  );
};

export default CharactersList;
