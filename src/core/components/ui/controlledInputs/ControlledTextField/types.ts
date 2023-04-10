import { TextFieldProps } from '@mui/material';
import { Control } from 'react-hook-form';

export interface IControlledTextFieldProps extends Omit<TextFieldProps, 'value' | 'onChange' | 'onBlur'> {
  control?: Control;
  name: string;
}
