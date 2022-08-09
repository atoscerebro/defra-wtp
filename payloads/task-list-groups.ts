import { TaskListStatus } from '../components/task-list/types';
import { TRANSLATION_KEYS } from '../translations/constants';

export const taskListGroups = [
  {
    title: TRANSLATION_KEYS.aboutTheWaste,
    sections: [
      {
        title: TRANSLATION_KEYS.wasteCodesAndDescriptions,
        link: 'submit-an-export/about-the-waste/waste-codes-descriptions',
        status: {
          label: TRANSLATION_KEYS.completed,
          value: TaskListStatus.COMPLETED,
        },
      },
      {
        title: TRANSLATION_KEYS.quantityOfWaste,
        link: 'submit-an-export/about-the-waste/quantity-of-waste',
        status: {
          label: TRANSLATION_KEYS.completed,
          value: TaskListStatus.COMPLETED,
        },
      },
      {
        title: TRANSLATION_KEYS.collectionDate,
        link: 'submit-an-export/about-the-waste/collection-date',
        status: {
          label: TRANSLATION_KEYS.completed,
          value: TaskListStatus.COMPLETED,
        },
      },
    ],
  },
  {
    title: TRANSLATION_KEYS.exporterAndImporter,
    sections: [
      {
        title: TRANSLATION_KEYS.exporterDetails,
        link: '/submit-an-export/exporter-and-importer/exporter-details/exporter-address',
        status: {
          label: TRANSLATION_KEYS.inProgress,
          value: TaskListStatus.IN_PROGRESS,
        },
      },
      {
        title: TRANSLATION_KEYS.importerDetails,
        link: '/submit-an-export/exporter-and-importer/importer-details/importer-address',
        status: {
          label: TRANSLATION_KEYS.inProgress,
          value: TaskListStatus.IN_PROGRESS,
        },
      },
    ],
  },
  {
    title: TRANSLATION_KEYS.journeyOfWaste,
    sections: [
      {
        title: TRANSLATION_KEYS.wasteCarriers,
        link: '/submit-an-export/journey-of-waste/waste-carriers/waste-carrier',
        status: {
          label: TRANSLATION_KEYS.notStartedYet,
          value: TaskListStatus.NOT_STARTED,
        },
      },
      {
        title: TRANSLATION_KEYS.wasteCollectionDetails,
        link: '/submit-an-export/journey-of-waste/waste-collection-details/waste-carrier-collection-location',
        status: {
          label: TRANSLATION_KEYS.notStartedYet,
          value: TaskListStatus.NOT_STARTED,
        },
      },
      {
        title: TRANSLATION_KEYS.locationWasteLeavesTheUk,
        link: '/submit-an-export/journey-of-waste/waste-leave-location',
        status: {
          label: TRANSLATION_KEYS.notStartedYet,
          value: TaskListStatus.NOT_STARTED,
        },
      },
      {
        title: TRANSLATION_KEYS.countriesWasteWillTravelThrough,
        link: '/submit-an-export/journey-of-waste/waste-travel-locations',
        status: {
          label: TRANSLATION_KEYS.notStartedYet,
          value: TaskListStatus.NOT_STARTED,
        },
      },
    ],
  },
  {
    title: TRANSLATION_KEYS.treatmentOfWaste,
    sections: [
      {
        title: TRANSLATION_KEYS.recoveryFacilityOrLaboratory,
        link: '/submit-an-export/treatment-of-waste/laboratory-details',
        status: {
          label: TRANSLATION_KEYS.notStartedYet,
          value: TaskListStatus.NOT_STARTED,
        },
      },
    ],
  },
];
