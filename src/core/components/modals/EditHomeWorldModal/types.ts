import { IHomeWorldInfo } from '@core/store/characterDetails/types';

export interface IEditHomeWorldModalProps {
  homeWorld: IHomeWorldInfo | null;
  isOpen: boolean;
  closeModal: () => void;
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
}

export interface IEditHomeWorldForm {
  diameter: number;
  // eslint-disable-next-line camelcase
  orbital_period: number;
  gravity: number;
  climate: string;
  population: number;
}
