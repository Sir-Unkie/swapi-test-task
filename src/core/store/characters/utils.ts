import { ICharacterDto } from '@core/api/types';

import { ICharacter } from './types';

export const charactersAdapter = (characters: ICharacterDto[]): ICharacter[] => characters.map((character) => ({
  ...character,
  asdasd: 2,
}));
