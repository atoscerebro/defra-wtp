export enum ADDRESS_FORM_VIEW_KEY {
  SEARCH = 'search',
  RESULTS = 'results',
  MANUAL = 'manual',
}

export enum ADDRESS_FORM_IDS {
  SELECT = 'select',
  LINE_1 = 'line1',
  LINE_2 = 'line2',
  TOWN = 'town',
  POSTCODE = 'postcode',
  COUNTRY = 'country',
}

export enum ADDRESS_FORM_LABELS {
  LINE_1 = 'Address line 1',
  LINE_2 = 'Address line 2 (optional)',
  TOWN = 'Town or city',
  POSTCODE = 'Postcode',
  COUNTRY = 'Country',
}

export const defaultLabels = {
  postcode: 'postcode',
  enterAddressManually: 'enterAddressManually',
  findAddress: 'findAddress',
  changePostcode: 'changePostcode',
  selectAddress: 'selectAddress',
  selectAnAddress: 'selectAnAddress',
  iCannotFindMyAddressInTheList: 'CannotFindMyAddressInTheList',
  saveAndContinue: 'saveAndContinue',
};
