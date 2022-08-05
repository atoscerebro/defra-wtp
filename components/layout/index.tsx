import { PageHeader } from '../page-header';
import { PageFooter } from '../page-footer';
import type { ReactElement } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <PageHeader />
      <div>{children}</div>
      <PageFooter />
    </>
  );
};

export default Layout;
