import { GridCol, GridRow, Input, Paragraph, Caption, ErrorText, InputField} from 'govuk-react';
import { useState, FC } from 'react';
import { DisplayInputFieldWrapper } from '../../../../components/display-input-field/styled-components';
import {
  QuantityInputWrapper,
  InputMeasurement,
  InputBringToFront,
  LinkButton,
  UpdateLaterMsg,
  QuantityErrorMessage
} from './styled-components';

interface IProps {
  updateLaterMsg?: boolean;
  errorMsg?: React.ReactNode
}

export const QuantityInput: FC<IProps> = ({updateLaterMsg, errorMsg, ...input}) => {
  const [measurementInTonnes, setMeasurementInTonnes] = useState(true);
  // console.log('meta:',meta)
  return (
    <GridRow>
      <GridCol setWidth="two-thirds">
        <UpdateLaterMsg>
          {updateLaterMsg && (
            <Paragraph>
              You&apos;ll need to update this with actual details as soon as
              possible after submitting this export.
            </Paragraph>
          )}
        </UpdateLaterMsg>
        <Caption size="M">
          Weight, in {measurementInTonnes ? 'tonnes' : 'cubic metres'}
        </Caption>
        <QuantityErrorMessage>
        {errorMsg}
        </QuantityErrorMessage>

        <GridRow>
          <GridCol setWidth="one-third">
            <QuantityInputWrapper>
              <InputBringToFront>
                <Input {...input}/>
              </InputBringToFront>
              <InputMeasurement>
                <Paragraph>{measurementInTonnes ? 'Mg' : 'm3'}</Paragraph>
              </InputMeasurement>
            </QuantityInputWrapper>
          </GridCol>
        </GridRow>

        <LinkButton
          type="button"
          onClick={() => {
            setMeasurementInTonnes(!measurementInTonnes);
          }}
        >
          Switch measurement to{' '}
          {measurementInTonnes ? 'Cubic Metres (m3)' : 'Tonnes (Mg)'}
        </LinkButton>
      </GridCol>
    </GridRow>
  );
};
