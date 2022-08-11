import { H2 } from 'govuk-react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { AddressForm } from '../../../../../components/address-form';
import { defaultKeys } from '../../../../../components/address-form/constants';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { TRANSLATION_KEYS } from '../../../../../translations/constants';
import { links } from '../../constants';
import React, { useMemo } from 'react';

const ExporterAddress = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.exporterContact);
  };

  const translatedLabels: typeof defaultKeys = useMemo(
    () => ({
      line1: t(defaultKeys.line1),
      line2: t(defaultKeys.line2),
      town: t(defaultKeys.town),
      country: t(defaultKeys.country),
      postcode: t(defaultKeys.postcode),
      enterAddressManually: t(defaultKeys.enterAddressManually),
      findAddress: t(defaultKeys.findAddress),
      changePostcode: t(defaultKeys.changePostcode),
      selectAddress: t(defaultKeys.selectAddress),
      selectAnAddress: t(defaultKeys.selectAnAddress),
      iCannotFindMyAddressInTheList: t(
        defaultKeys.iCannotFindMyAddressInTheList,
      ),
      saveAndContinue: t(defaultKeys.saveAndContinue),
    }),
    [t],
  );

  return (
    <BaseTaskPage
      component={
        <>
          <H2 size="LARGE">{t(TRANSLATION_KEYS.whatsTheExporterAddress)}</H2>
          <AddressForm handleSubmit={handleSubmit} labels={translatedLabels} />
        </>
      }
    />
  );
};

export default ExporterAddress;
