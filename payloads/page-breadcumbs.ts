import { IBreadcrumb } from '../components/page-breadcrumbs';
import { TRANSLATION_KEYS } from '../translations/constants';

export const homeCrumbs: IBreadcrumb[] = [
  { label: TRANSLATION_KEYS.wasteTrackingService, route: '/' },
];

export const uniqueRefCrumbs: IBreadcrumb[] = [
  { label: TRANSLATION_KEYS.wasteTrackingService, route: '/' },
  { label: TRANSLATION_KEYS.greenListWasteOverview, route: '/' },
];

export const prenotifyCrumbs: IBreadcrumb[] = [
  { label: TRANSLATION_KEYS.wasteTrackingService, route: '/' },
  { label: TRANSLATION_KEYS.greenListWasteOverview, route: '/' },
  {
    label: TRANSLATION_KEYS.yourReferenceNumber,
    route: '/submit-an-export/unique-ref',
  },
];
