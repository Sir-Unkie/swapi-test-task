import { IHomeWorldInfo, ISpeciesInfo } from '@core/store/characterDetails/types';
import { ICharacter } from '@core/store/characters/types';

export interface ICharacterDetailsCardProps {
  homeworld: IHomeWorldInfo | null;
  species: ISpeciesInfo | null;
  character: ICharacter;
}
