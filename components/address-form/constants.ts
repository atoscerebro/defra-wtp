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

export const defaultKeys = {
  line1: 'line1',
  line2: 'line2',
  town: 'town',
  postcode: 'postcode',
  country: 'country',
  enterAddressManually: 'enterAddressManually',
  findAddress: 'findAddress',
  changePostcode: 'changePostcode',
  selectAddress: 'selectAddress',
  selectAnAddress: 'selectAnAddress',
  iCannotFindMyAddressInTheList: 'iCannotFindMyAddressInTheList',
  saveAndContinue: 'saveAndContinue',
};

export const defaultLabels = {
  line1: 'Address line 1',
  line2: 'Address line 2 (optional)',
  town: 'Town or city',
  postcode: 'Postcode',
  country: 'Country',
  enterAddressManually: 'Enter address manually',
  findAddress: 'Find address',
  changePostcode: 'Change postcode',
  selectAddress: 'Select address',
  selectAnAddress: 'Select an address',
  iCannotFindMyAddressInTheList: 'Cannot find my address in the list',
  saveAndContinue: 'Save and continue',
};
