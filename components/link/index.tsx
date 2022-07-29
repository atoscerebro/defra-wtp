import NextLink, { LinkProps } from 'next/link';
import { Link as GovUKLink } from 'govuk-react';
import { FC, ReactNode } from 'react';

export interface ILinkProps extends Omit<LinkProps, 'passHref' | 'as'> {
  className?: string;
  children: ReactNode;
}

export const Link: FC<ILinkProps> = ({ className, children, ...rest }) => (
  <NextLink passHref {...rest}>
    <GovUKLink className={className}>{children}</GovUKLink>
  </NextLink>
);
