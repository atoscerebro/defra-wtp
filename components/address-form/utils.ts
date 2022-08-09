import { IAddress } from './types';

export const getAddressString = (address: IAddress) =>
  Object.values(address).join(', ');
