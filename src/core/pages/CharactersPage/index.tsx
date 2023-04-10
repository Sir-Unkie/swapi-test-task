import { TablePagination } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import CharactersList from '@core/components/CharactersList';
import SearchInputDebounced from '@core/components/ui/SearchInputDebounced';
import { useAppDispatch } from '@core/store';
import { setFilter, setPage } from '@core/store/characters';
import { selectCharacters, selectCharactersResponse, selectFilter, selectPage } from '@core/store/characters/selectors';
import { fetchCharacters } from '@core/store/characters/thunks';
import { IFetchCharactersThunkArg } from '@core/store/characters/types';

import * as UI from './styles';

const CharactersPage = () => {
  const dispatch = useAppDispatch();

  const filter = useSelector(selectFilter);
  const page = useSelector(selectPage);
  const charactersResponse = useSelector(selectCharactersResponse);
  const characters = useSelector(selectCharacters);

  const { count } = charactersResponse ?? {};

  useEffect(() => {
    const payload: IFetchCharactersThunkArg = {
      searhParams: {
        page: page + 1,
        search: filter ?? undefined,
      },
    };

    const promise = dispatch(fetchCharacters(payload));

    return () => {
      promise.abort();
    };
  }, [dispatch, filter, page]);

  const pageChangeHandler = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, pageValue: number,
  ) => dispatch(setPage(pageValue));

  const changeFilterHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(setPage(0));
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <SearchInputDebounced
        label="Search by name"
        value={filter}
        variant="standard"
        onChange={changeFilterHandler}
      />

      <CharactersList
        data={characters ?? []}
      />

      <UI.PaginationWrapper>
        <TablePagination
          count={count ?? 0}
          page={page}
          rowsPerPage={10}
          rowsPerPageOptions={[10]}
          onPageChange={pageChangeHandler}
        />
      </UI.PaginationWrapper>
    </>
  );
};

export default CharactersPage;
