import { MutableState, Tools } from 'final-form';
import { FC, useState } from 'react';
import { Form } from 'react-final-form';
import { ADDRESS_FORM_VIEW_KEY } from './constants';
import { ManualForm } from './manual-form';
import { PostcodeForm } from './postcode-form';
import { ResultsForm } from './results-form';
import { IAddress, IHints } from './types';
import { getAddressString } from './utils';
import { defaultLabels } from './constants';

export interface IAddressFormProps {
  hints?: IHints;
  labels?: {
    postcode?: string;
    enterAddressManually?: string;
    findAddress?: string;
    changePostcode?: string;
    selectAddress?: string;
    selectAnAddress?: string;
    iCannotFindMyAddressInTheList?: string;
    saveAndContinue?: string;
  };
  handleSubmit: (address: IAddress) => void;
}

/**
 * Use the address form to allow users to choose between searching for and
 * manually inputting their address.
 */
export const AddressForm: FC<IAddressFormProps> = ({
  hints,
  labels = defaultLabels,
  handleSubmit,
}) => {
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

  return (
    <Form onSubmit={handleSubmit} mutators={{ handleSelectAddress }}>
      {({ handleSubmit, form }) => (
        <form onSubmit={handleSubmit}>
          {
            {
              [ADDRESS_FORM_VIEW_KEY.SEARCH]: (
                <PostcodeForm
                  labels={{ ...labels }}
                  onChangePostcode={(value) => setPostcode(value)}
                  onSetResults={handleSetResults}
                  onSetManual={handleSetManual}
                />
              ),
              [ADDRESS_FORM_VIEW_KEY.RESULTS]: (
                <ResultsForm
                  labels={{ ...labels }}
                  postcode={postcode}
                  results={results}
                  form={form}
                  onResetPostcode={handleResetPostcode}
                  onSetManual={handleSetManual}
                />
              ),
              [ADDRESS_FORM_VIEW_KEY.MANUAL]: (
                <ManualForm
                  hints={hints}
                  form={form}
                  onResetPostcode={handleResetPostcode}
                />
              ),
            }[viewKey]
          }
        </form>
      )}
    </Form>
  );
};
