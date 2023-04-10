export interface IGenericStoreDataState<T = null> {
  data: T | null;
  dataRequestStatus: EDataRequestStatus;
}

export interface IGenericStoreDataStateWithPage <T = null> extends IGenericStoreDataState<T> {
  currentPage: number;
  filter: string;
}

export enum EDataRequestStatus {
  idle = 'idle',
  pending = 'pending',
  fulfilled = 'fulfilled',
  rejected = 'rejected',
}
