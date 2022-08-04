import { NextPage } from 'next';
import { UniqueRefForm } from '../../components/form-pages/unique-ref-form';
import { Main } from 'govuk-react';
import { PageBreadcrumbs } from '../../components/page-breadcrumbs';
import { uniqueRefCrumbs } from '../../payloads/page-breadcumbs';

const SubmitExport: NextPage = () => {
  return (
    <Main>
      <PageBreadcrumbs
        crumbs={uniqueRefCrumbs}
        currentPage="Your reference number"
      />
      <UniqueRefForm />
    </Main>
  );
};

export default SubmitExport;
