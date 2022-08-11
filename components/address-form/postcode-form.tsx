import { Button, FormGroup, InputField } from 'govuk-react';
import { FC } from 'react';
import { defaultLabels } from './constants';
import * as StyledComponents from './styled-components';

export interface IPostcodeForm {
  labels?: {
    postcode?: string;
    enterAddressManually?: string;
    findAddress?: string;
  };
  onChangePostcode: (value: string) => void;
  onSetManual: () => void;
  onSetResults: () => void;
}

export const PostcodeForm: FC<IPostcodeForm> = ({
  labels = {},
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
          {labels.postcode}
        </InputField>
      </FormGroup>
      <FormGroup>
        <StyledComponents.LinkButton as="button" onClick={onSetManual}>
          {labels.enterAddressManually}
        </StyledComponents.LinkButton>
      </FormGroup>
      <div>
        <Button type="button" onClick={onSetResults}>
          {labels.findAddress}
        </Button>
      </div>
    </>
  );
};
