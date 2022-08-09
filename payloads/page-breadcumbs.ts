import { IBreadcrumb } from '../components/page-breadcrumbs';

export const homeCrumbs: IBreadcrumb[] = [
  { label: 'wasteTrackingService', route: '/' },
];

export const uniqueRefCrumbs: IBreadcrumb[] = [
  { label: 'wasteTrackingService', route: '/' },
  { label: 'greenListWasteOverview', route: '/' },
];

export const prenotifyCrumbs: IBreadcrumb[] = [
  { label: 'wasteTrackingService', route: '/' },
  { label: 'greenListWasteOverview', route: '/' },
  { label: 'yourReferenceNumber', route: '/submit-an-export/unique-ref' },
];
