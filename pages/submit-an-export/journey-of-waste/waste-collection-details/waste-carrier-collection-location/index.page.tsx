import { H2 } from 'govuk-react';
import { useRouter } from 'next/router';
import { AddressForm } from '../../../../../components/address-form';
import { defaultLabels } from '../../../../../components/address-form/constants';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { links } from '../../constants';

const WasteCarrierCollect = () => {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.wasteCarrierCollectContact);
  };

  const translatedLabels: typeof defaultLabels = useMemo(
    () => ({
      postcode: t(defaultLabels.postcode),
    }),
    [t],
  );

  return (
    <BaseTaskPage
      component={
        <>
          <H2 size="LARGE">
            Where will the waste carrier collect the waste from?
          </H2>
          <AddressForm
            handleSubmit={handleSubmit}
            hints={{ country: "We'll use this as the exporting country." }}
            labels={}
          />
        </>
      }
    />
  );
};

export default WasteCarrierCollect;
