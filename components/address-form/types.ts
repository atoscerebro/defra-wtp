export interface IAddress {
  line1: string;
  line2?: string;
  town: string;
  country: string;
  postcode: string;
}

export type IHints = Partial<IAddress>;
