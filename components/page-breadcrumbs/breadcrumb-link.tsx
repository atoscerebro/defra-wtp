import NextLink, { LinkProps } from 'next/link';
import { FC, ReactNode } from 'react';
import { Breadcrumbs } from 'govuk-react';
import { Link } from '../link';

export interface IBreadcrumbLinkProps
  extends Omit<LinkProps, 'passHref' | 'as'> {
  className?: string;
  children: ReactNode;
}

export const BreadcrumbLink: FC<IBreadcrumbLinkProps> = ({
  className,
  children,
  ...rest
}) => {
  if (Breadcrumbs.Link) {
    return (
      <NextLink passHref {...rest}>
        <Breadcrumbs.Link className={className}>{children}</Breadcrumbs.Link>
      </NextLink>
    );
  }

  return (
    <Link className={className} {...rest}>
      {children}
    </Link>
  );
};
