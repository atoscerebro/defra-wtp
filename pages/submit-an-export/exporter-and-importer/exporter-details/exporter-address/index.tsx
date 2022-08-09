import { H2 } from 'govuk-react';
import { useRouter } from 'next/router';
import { AddressForm } from '../../../../../components/address-form';
import { BaseTaskPage } from '../../../../../components/base-task-page';
import { links } from '../../constants';

const ExporterAddress = () => {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    console.log(data);
    router.push(links.exporterContact);
  };

  return (
    <BaseTaskPage
      component={
        <>
          <H2 size="LARGE">What&apos;s the exporter address?</H2>
          <AddressForm handleSubmit={handleSubmit} />
        </>
      }
    />
  );
};

export default ExporterAddress;
