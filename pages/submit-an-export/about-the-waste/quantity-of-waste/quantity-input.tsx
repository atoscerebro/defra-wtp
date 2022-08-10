import { GridCol, GridRow, Input, Paragraph, Caption } from 'govuk-react';
import { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { DisplayInputFieldWrapper } from '../../../../components/display-input-field/styled-components';
import { TRANSLATION_KEYS } from '../../../../translations/constants';
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
  const { t } = useTranslation();

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
          {t(TRANSLATION_KEYS.weightIn)}{' '}
          {measurementInTonnes
            ? t(TRANSLATION_KEYS.tonnes)
            : t(TRANSLATION_KEYS.cubicMetres)}
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
          {t(TRANSLATION_KEYS.switchMeasurementTo)}{' '}
          {measurementInTonnes
            ? t(TRANSLATION_KEYS.cubicMetresM3)
            : t(TRANSLATION_KEYS.tonnesMg)}
        </LinkButton>
      </GridCol>
    </GridRow>
  );
};
