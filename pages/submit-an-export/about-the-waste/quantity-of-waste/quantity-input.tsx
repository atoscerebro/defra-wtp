import { GridCol, GridRow, Input, Paragraph, Caption } from 'govuk-react';
import { useState, FC } from 'react';
import { DisplayInputFieldWrapper } from '../../../../components/display-input-field/styled-components';
import {
  QuantityInputWrapper,
  InputMeasurement,
  InputBringToFront,
  LinkButton,
  UpdateLaterMsg,
} from './styled-components';

interface IProps {
  updateLaterMsg?: boolean;
}

export const QuantityInput: FC<IProps> = ({ updateLaterMsg, ...input }) => {
  const [measurementInTonnes, setMeasurementInTonnes] = useState(true);

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
        <GridRow>
          <GridCol setWidth="one-third">
            <QuantityInputWrapper>
              <InputBringToFront>
                <Input {...input} />
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
