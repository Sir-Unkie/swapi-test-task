import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { IControlledTextFieldProps } from './types';

const ControlledTextField = (props: IControlledTextFieldProps) => {
  const { control, label, name, defaultValue } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <TextField
          defaultValue={defaultValue}
          error={!!error}
          helperText={error?.message}
          inputRef={ref}
          label={label}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        />
      )}
    />
  );
};

export default ControlledTextField;
