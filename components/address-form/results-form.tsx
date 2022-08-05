import { FormApi } from 'final-form';
import { Button, FormGroup, Paragraph, Select } from 'govuk-react';
import { FC } from 'react';
import { Field } from 'react-final-form';
import { ADDRESS_FORM_IDS } from './constants';
import * as StyledComponents from './styled-components';
import { IAddress } from './types';

export interface IResultsForm {
  results: Record<string, IAddress>;
  form: FormApi<IAddress, Partial<IAddress>>;
  postcode: string;
  onResetPostcode: () => void;
  onSetManual: () => void;
}

export const ResultsForm: FC<IResultsForm> = ({
  results,
  form,
  postcode,
  onResetPostcode,
  onSetManual,
}) => {
  const handleResetPostcode = () => {
    onResetPostcode();
    form.reset();
  };

  const handleSetManual = () => {
    onSetManual();
    form.reset();
  };

  return (
    <>
      <Paragraph>{postcode}</Paragraph>
      <FormGroup>
        <StyledComponents.LinkButton
          as="button"
          type="button"
          onClick={handleResetPostcode}
        >
          Change postcode
        </StyledComponents.LinkButton>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.SELECT}>
          {({ input: { onChange, ...rest } }) => (
            <Select
              {...rest}
              label="Select an address"
              input={{
                onChange: (e) =>
                  form.mutators.handleSelectAddress(results[e.target.value]),
              }}
            >
              {Object.keys(results).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </Select>
          )}
        </Field>
      </FormGroup>
      <FormGroup>
        <StyledComponents.LinkButton
          as="button"
          type="button"
          onClick={handleSetManual}
        >
          I cannot find my address in the list
        </StyledComponents.LinkButton>
      </FormGroup>
      <div>
        <Button>Save and continue</Button>
      </div>
    </>
  );
};
