import { FormApi } from 'final-form';
import { Button, FormGroup, Paragraph, Select } from 'govuk-react';
import { FC } from 'react';
import { Field } from 'react-final-form';
import { ADDRESS_FORM_IDS, defaultLabels } from './constants';
import * as StyledComponents from './styled-components';
import { IAddress, ILabels } from './types';

export interface IResultsForm {
  labels: ILabels;
  results: Record<string, IAddress>;
  form: FormApi<IAddress, Partial<IAddress>>;
  postcode: string;
  onResetPostcode: () => void;
  onSetManual: () => void;
}

export const ResultsForm: FC<IResultsForm> = ({
  labels,
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
          {labels.changePostcode}
        </StyledComponents.LinkButton>
      </FormGroup>
      <FormGroup>
        <Field name={ADDRESS_FORM_IDS.SELECT}>
          {({ input: { onChange, ...rest } }) => (
            <Select
              {...rest}
              label={labels.selectAnAddress}
              input={{
                defaultValue: 'none',
                onChange: (e) =>
                  form.mutators.handleSelectAddress(results[e.target.value]),
              }}
            >
              <option value="none" disabled>
                {labels.selectAddress}
              </option>
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
          {labels.iCannotFindMyAddressInTheList}
        </StyledComponents.LinkButton>
      </FormGroup>
      <div>
        <Button>{labels.saveAndContinue}</Button>
      </div>
    </>
  );
};
