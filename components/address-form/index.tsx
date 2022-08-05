import { FormApi, MutableState, Tools } from 'final-form';
import { Button, FormGroup, InputField } from 'govuk-react';
import { useState } from 'react';
import { Form } from 'react-final-form';
import { ADDRESS_FORM_VIEW_KEY } from './constants';
import { ManualForm } from './manual-form';
import { PostcodeForm } from './postcode-form';
import { ResultsForm } from './results-form';
import * as StyledComponents from './styled-components';
import { IAddress } from './types';
import { getAddressString } from './utils';

export interface IAddressFormProps {
  handleSubmit: (address: IAddress) => void;
}

export const AddressForm = ({ handleSubmit }: IAddressFormProps) => {
  const [viewKey, setViewKey] = useState(ADDRESS_FORM_VIEW_KEY.SEARCH);
  const [postcode, setPostcode] = useState('');
  const [results, setResults] = useState<Record<string, IAddress>>({});

  const handleResetPostcode = () => {
    setPostcode('');
    setViewKey(ADDRESS_FORM_VIEW_KEY.SEARCH);
  };

  const handleSetResults = () => {
    setResults(
      [
        {
          line1: '26 Wakefield Street',
          town: 'Manchester',
          postcode,
          country: 'UK',
        },
        {
          line1: '27 Wakefield Street',
          town: 'Manchester',
          postcode,
          country: 'UK',
        },
        {
          line1: '28 Wakefield Street',
          town: 'Manchester',
          postcode,
          country: 'UK',
        },
      ].reduce(
        (out: Record<string, IAddress>, curr) => (
          (out[getAddressString(curr)] = curr), out
        ),
        {},
      ),
    );
    setViewKey(ADDRESS_FORM_VIEW_KEY.RESULTS);
  };

  const handleSetManual = () => {
    setViewKey(ADDRESS_FORM_VIEW_KEY.MANUAL);
  };

  const handleSelectAddress = (
    args: IAddress[],
    state: MutableState<IAddress, Partial<IAddress>>,
    tools: Tools<IAddress, Partial<IAddress>>,
  ) => {
    Object.entries(args[0]).forEach(([key, value]) => {
      tools.changeValue(state, key, () => value);
    });
  };

  const handleResetAddress = (form: FormApi<IAddress, Partial<IAddress>>) => {
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} mutators={{ handleSelectAddress }}>
      {({ handleSubmit, form }) => (
        <form onSubmit={handleSubmit}>
          {
            {
              [ADDRESS_FORM_VIEW_KEY.SEARCH]: (
                <PostcodeForm
                  onChangePostcode={(value) => setPostcode(value)}
                  onSetResults={handleSetResults}
                  onSetManual={handleSetManual}
                />
              ),
              [ADDRESS_FORM_VIEW_KEY.RESULTS]: (
                <ResultsForm
                  postcode={postcode}
                  results={results}
                  form={form}
                  onResetPostcode={handleResetPostcode}
                  onSetManual={handleSetManual}
                />
              ),
              [ADDRESS_FORM_VIEW_KEY.MANUAL]: <ManualForm />,
            }[viewKey]
          }
        </form>
      )}
    </Form>
  );
};
