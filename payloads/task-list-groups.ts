import { t } from 'i18next';
import { TaskListStatus } from '../components/task-list/types';

export const taskListGroups = [
  {
    title: 'aboutTheWaste',
    sections: [
      {
        title: 'wasteCodesAndDescriptions',
        link: 'submit-an-export/about-the-waste/waste-codes-descriptions',
        status: TaskListStatus.COMPLETED,
      },
      {
        title: 'quantityOfWaste',
        link: 'submit-an-export/about-the-waste/quantity-of-waste',
        status: TaskListStatus.COMPLETED,
      },
      {
        title: 'collectionDate',
        link: 'collection-date',
        status: TaskListStatus.COMPLETED,
      },
    ],
  },
  {
    title: 'exporterAndImporter',
    sections: [
      {
        title: 'exporterDetails',
        link: '/submit-an-export/exporter-and-importer/exporter-details/exporter-address',
        status: TaskListStatus.IN_PROGRESS,
      },
      {
        title: 'importerDetails',
        link: '/submit-an-export/exporter-and-importer/importer-details/importer-address',
        status: TaskListStatus.IN_PROGRESS,
      },
    ],
  },
  {
    title: 'journeyOfWaste',
    sections: [
      {
        title: 'wasteCarriers',
        link: '/submit-an-export/journey-of-waste/waste-carriers/waste-carrier',
        status: TaskListStatus.NOT_STARTED,
      },
      {
        title: 'wasteCollectionDetails',
        link: '/submit-an-export/journey-of-waste/waste-collection-details/waste-carrier-collection-location',
        status: TaskListStatus.NOT_STARTED,
      },
      {
        title: 'locationWasteLeavesTheUk',
        link: '/submit-an-export/journey-of-waste/waste-leave-location',
        status: TaskListStatus.NOT_STARTED,
      },
      {
        title: 'countriesWasteWillTravelThrough',
        link: '/submit-an-export/journey-of-waste/waste-travel-locations',
        status: TaskListStatus.NOT_STARTED,
      },
    ],
  },
  {
    title: 'treatmentOfWaste',
    sections: [
      {
        title: 'recoveryFacilityOrLaboratory',
        link: '/submit-an-export/treatment-of-waste/laboratory-details',
        status: TaskListStatus.NOT_STARTED,
      },
    ],
  },
];
