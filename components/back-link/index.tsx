import NextLink, { LinkProps } from 'next/link';
import { BackLink as GovUKLink } from 'govuk-react';
import { FC, ReactNode } from 'react';

export interface IBackLinkProps extends Omit<LinkProps, 'passHref' | 'as'> {
  className?: string;
  children: ReactNode;
}

export const BackLink: FC<IBackLinkProps> = ({
  className,
  children,
  ...rest
}) => (
  <NextLink passHref {...rest}>
    <GovUKLink className={className}>{children}</GovUKLink>
  </NextLink>
);
