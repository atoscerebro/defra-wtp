import { Button, FormGroup, InputField, Paragraph, Select } from 'govuk-react';
import { ReactElement, useState } from 'react';
import { ADDRESS_SEARCH_VIEW_KEY } from './constants';
import * as StyledComponents from './styled-components';
import { IAddress } from './types';
import { getAddressString } from './utils';

export interface IAddressSearchProps {
  handleSubmit: (data: IAddress) => void;
  children: (renderProps: { resetSearch: () => void }) => ReactElement;
}

export const AddressSearch = ({
  handleSubmit,
  children,
}: IAddressSearchProps) => {
  const [viewKey, setViewKey] = useState(ADDRESS_SEARCH_VIEW_KEY.POSTCODE);
  const [postcode, setPostcode] = useState('');
  const [results, setResults] = useState<Record<string, IAddress>>({});
  const [address, setAddress] = useState<IAddress>();

  const handleFindAddress = () => {
    setResults(
      [
        {
          line1: '26 Wakefield Street',
          town: 'Manchester',
          postcode: 'M1 4YU',
          country: 'UK',
        },
        {
          line1: '27 Wakefield Street',
          town: 'Manchester',
          postcode: 'M1 4YU',
          country: 'UK',
        },
        {
          line1: '28 Wakefield Street',
          town: 'Manchester',
          postcode: 'M1 4YU',
          country: 'UK',
        },
      ].reduce(
        (out: Record<string, IAddress>, curr) => (
          (out[getAddressString(curr)] = curr), out
        ),
        {},
      ),
    );
    setViewKey(ADDRESS_SEARCH_VIEW_KEY.RESULTS);
  };

  const postcodeSearch = (
    <>
      <FormGroup>
        <InputField input={{ onChange: (e) => setPostcode(e.target.value) }}>
          Postcode
        </InputField>
      </FormGroup>
      <FormGroup>
        <StyledComponents.LinkButton
          as="button"
          onClick={() => setViewKey(ADDRESS_SEARCH_VIEW_KEY.MANUAL)}
        >
          Enter address manually
        </StyledComponents.LinkButton>
      </FormGroup>
      <Button type="button" onClick={handleFindAddress}>
        Find address
      </Button>
    </>
  );

  const postcodeResults = (
    <>
      <Paragraph>{postcode}</Paragraph>
      <FormGroup>
        <StyledComponents.LinkButton
          as="button"
          onClick={() => {
            setPostcode('');
            setViewKey(ADDRESS_SEARCH_VIEW_KEY.POSTCODE);
          }}
        >
          Change postcode
        </StyledComponents.LinkButton>
      </FormGroup>
      <FormGroup>
        <Select
          label="Select an address"
          input={{ onChange: (e) => setAddress(results[e.target.value]) }}
        >
          {Object.keys(results).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <StyledComponents.LinkButton
          as="button"
          onClick={() => {
            setViewKey(ADDRESS_SEARCH_VIEW_KEY.MANUAL);
          }}
        >
          I cannot find my address in the list
        </StyledComponents.LinkButton>
      </FormGroup>
      <div>
        <Button type="button" onClick={() => address && handleSubmit(address)}>
          Save and continue
        </Button>
      </div>
    </>
  );

  return {
    [ADDRESS_SEARCH_VIEW_KEY.POSTCODE]: postcodeSearch,
    [ADDRESS_SEARCH_VIEW_KEY.RESULTS]: postcodeResults,
    [ADDRESS_SEARCH_VIEW_KEY.MANUAL]: children({
      resetSearch: () => setViewKey(ADDRESS_SEARCH_VIEW_KEY.POSTCODE),
    }),
  }[viewKey];
};
