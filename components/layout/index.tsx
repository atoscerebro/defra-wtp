import { PageHeader } from '../page-header';
import { PageFooter } from '../page-footer';
import { ReactNode } from 'react';
import * as StyledComponents from './styled-components';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledComponents.LayoutContainer>
      <PageHeader />
      <StyledComponents.LayoutWrapper>
        {children}
      </StyledComponents.LayoutWrapper>
      <PageFooter />
    </StyledComponents.LayoutContainer>
  );
};

export default Layout;
