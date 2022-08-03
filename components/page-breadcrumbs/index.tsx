import { Breadcrumbs } from 'govuk-react';
import { Link } from '../link';

const BreadcrumbsLink = Breadcrumbs.Link || Link;

const PageBreadcrumbs = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbsLink href="#">Waste tracking service</BreadcrumbsLink>
      <BreadcrumbsLink href="/">Green list waste overview</BreadcrumbsLink>
    </Breadcrumbs>
  );
};
