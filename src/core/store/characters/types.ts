import { ICharacterDto, IGetCharactersApiResponse, IGetCharactersApiSearchParams } from '@core/api/types';

export interface ICharacter extends Pick<ICharacterDto,
'homeworld'
| 'species'
| 'films'
| 'url'
| 'eye_color'
| 'hair_color'
| 'skin_color'
| 'mass'
| 'height'
| 'gender'
| 'name'
> { }

export interface ICharactersState extends Omit<IGetCharactersApiResponse, 'results'> {
  results: ICharacter[];
}

export interface IFetchCharactersThunkArg {
  searhParams?: IGetCharactersApiSearchParams;
}
