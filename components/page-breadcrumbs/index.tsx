import { Breadcrumbs, H2, H3 } from 'govuk-react';
import { Link } from '../link';
import { FC } from 'react';
import { BreadcrumbLink } from './breadcrumb-link';

export interface IBreadcrumb {
  route: string;
  label: string;
}

interface IPageBreadcumbsProps {
  crumbs: IBreadcrumb[];
  currentPage?: string;
}

export const PageBreadcrumbs: FC<IPageBreadcumbsProps> = ({
  crumbs,
  currentPage,
}: IPageBreadcumbsProps) => {
  return (
    <Breadcrumbs>
      {crumbs.map((crumb, index) => (
        <BreadcrumbLink key={index} href={crumb.route}>
          {crumb.label}
        </BreadcrumbLink>
      ))}
      <span>{currentPage}</span>
    </Breadcrumbs>
  );
};
