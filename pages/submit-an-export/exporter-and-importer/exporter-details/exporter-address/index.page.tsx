import { H2 } from 'govuk-react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { AddressForm } from '../../../../../components/address-form';
import { defaultLabels } from '../../../../../components/address-form/constants';
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

  const translatedLabels: typeof defaultLabels = useMemo(
    () => ({
      postcode: t(defaultLabels.postcode),
      enterAddressManually: t(defaultLabels.enterAddressManually),
      findAddress: t(defaultLabels.findAddress),
      changePostcode: t(defaultLabels.changePostcode),
      selectAddress: t(defaultLabels.selectAddress),
      selectAnAddress: t(defaultLabels.selectAnAddress),
      iCannotFindMyAddressInTheList: t(
        defaultLabels.iCannotFindMyAddressInTheList,
      ),
      saveAndContinue: t(defaultLabels.saveAndContinue),
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
