import { TextField, TextFieldProps } from '@mui/material';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const SearchInputDebounced = (props: TextFieldProps) => {
  const { onChange, value } = props;

  const [filter, setFilter] = useState<string>();

  const emptyFunc = () => { };

  useEffect(() => {
    setFilter(value as string);
  }, [value]);

  const debouncedChangeHandler = useDebouncedCallback(onChange ?? emptyFunc, 500);

  const changeFilterHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFilter(event.target.value);
    debouncedChangeHandler(event);
  };

  return (
    <TextField
      {...props}
      value={filter}
      onChange={changeFilterHandler}
    />
  );
};

export default SearchInputDebounced;
