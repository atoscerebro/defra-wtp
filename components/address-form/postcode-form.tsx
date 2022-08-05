import { Button, FormGroup, InputField } from 'govuk-react';
import { FC } from 'react';
import * as StyledComponents from './styled-components';

export interface IPostcodeForm {
  onChangePostcode: (value: string) => void;
  onSetManual: () => void;
  onSetResults: () => void;
}

export const PostcodeForm: FC<IPostcodeForm> = ({
  onChangePostcode,
  onSetManual,
  onSetResults,
}) => {
  return (
    <>
      <FormGroup>
        <InputField
          input={{ onChange: (e) => onChangePostcode(e.target.value) }}
        >
          Postcode
        </InputField>
      </FormGroup>
      <FormGroup>
        <StyledComponents.LinkButton as="button" onClick={onSetManual}>
          Enter address manually
        </StyledComponents.LinkButton>
      </FormGroup>
      <Button type="button" onClick={onSetResults}>
        Find address
      </Button>
    </>
  );
};
