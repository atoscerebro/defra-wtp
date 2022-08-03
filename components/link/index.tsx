import NextLink, { LinkProps } from 'next/link';
import { FC, ReactNode } from 'react';
import * as StyledComponents from './styled-components';

export interface ILinkProps extends Omit<LinkProps, 'passHref' | 'as'> {
  className?: string;
  children: ReactNode;
}

export const Link: FC<ILinkProps> = ({ className, children, ...rest }) => (
  <NextLink passHref {...rest}>
    <StyledComponents.StyledGovUKLink className={className}>
      {children}
    </StyledComponents.StyledGovUKLink>
  </NextLink>
);
