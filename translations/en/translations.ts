import { TaskListStatus } from '../../components/task-list/types';
import { TRANSLATION_KEYS } from '../constants';

export const TRANSLATIONS_EN = {
  // Home page translations:
  [TRANSLATION_KEYS.greenListWasteOverview]: 'Green list waste overview',
  [TRANSLATION_KEYS.tellUsAboutAnExport]: 'Tell us about an export',
  [TRANSLATION_KEYS.submitAnExport]: 'Submit an export',
  [TRANSLATION_KEYS.continueADraftExport]: 'Continue a draft export',
  [TRANSLATION_KEYS.allExports]: 'All exports',
  [TRANSLATION_KEYS.updateAnExportWithActualDetails]:
    'Update an export with actual details',
  [TRANSLATION_KEYS.viewSubmittedExports]: 'View submitted exports',

  // Footer
  [TRANSLATION_KEYS.accessibilityStatement]: 'Accessibility statement',
  [TRANSLATION_KEYS.cookies]: 'Cookies',
  [TRANSLATION_KEYS.privacyNotice]: 'Privacy notice',
  [TRANSLATION_KEYS.change]: 'Change?',
  [TRANSLATION_KEYS.clearData]: 'Clear data',
  [TRANSLATION_KEYS.crownCopyright]: 'Crown copyright',

  // Header
  [TRANSLATION_KEYS.exportGreenListWaste]: 'Export green list waste',

  // Unique reference page;
  [TRANSLATION_KEYS.yourReferenceNumber]: 'Your reference number',
  [TRANSLATION_KEYS.doYouWantToAddYourOwnReferenceNumberToThisExport]:
    'Do you want to add your own reference number to this export?',
  [TRANSLATION_KEYS.yes]: 'Yes',
  [TRANSLATION_KEYS.no]: 'No',
  [TRANSLATION_KEYS.saveAndContinue]: 'Save and continue',
  [TRANSLATION_KEYS.enterYourReferenceNumber]: 'Enter your reference number',
  [TRANSLATION_KEYS.submissionIncomplete]: 'Submission incomplete',
  [TRANSLATION_KEYS.submissionComplete]: 'Submission complete',
  [TRANSLATION_KEYS.youHaveCompleted]: 'You have completed',
  [TRANSLATION_KEYS.of]: 'of',
  [TRANSLATION_KEYS.sections]: 'sections',

  // Task list groups:
  [TRANSLATION_KEYS.aboutTheWaste]: 'About the waste',
  [TRANSLATION_KEYS.wasteCodesAndDescriptions]: 'Waste codes and descriptions',
  [TRANSLATION_KEYS.quantityOfWaste]: 'Quantity of waste',
  [TRANSLATION_KEYS.collectionDate]: 'Collection date',
  [TRANSLATION_KEYS.exporterAndImporter]: 'Exporter and importer',
  [TRANSLATION_KEYS.exporterDetails]: 'Exporter details',
  [TRANSLATION_KEYS.importerDetails]: 'Importer details',
  [TRANSLATION_KEYS.journeyOfWaste]: 'Journey of waste',
  [TRANSLATION_KEYS.wasteCarriers]: 'Waste carriers',
  [TRANSLATION_KEYS.wasteCollectionDetails]: 'Waste collection details',
  [TRANSLATION_KEYS.locationWasteLeavesTheUk]: 'Location waste leaves the UK',
  [TRANSLATION_KEYS.countriesWasteWillTravelThrough]:
    'Countries waste will travel through',
  [TRANSLATION_KEYS.treatmentOfWaste]: 'Treatment of waste',
  [TRANSLATION_KEYS.recoveryFacilityOrLaboratory]:
    'Recovery facility or laboratory',

  // Breadcrumbs:
  [TRANSLATION_KEYS.wasteTrackingService]: 'Waste tracking service',

  //Status
  [TRANSLATION_KEYS.cannotStart]: 'Cannot start',
  [TRANSLATION_KEYS.notStartedYet]: 'Not started yet',
  [TRANSLATION_KEYS.inProgress]: 'In progress',
  [TRANSLATION_KEYS.completed]: 'Completed',

  [TRANSLATION_KEYS.back]: 'Back',
  [TRANSLATION_KEYS.returnToSubmitAnExport]: 'Return to submit an export',
  [TRANSLATION_KEYS.whatIsTheWasteCode]: 'What is the waste code?',
  [TRANSLATION_KEYS.selectOneOption]: 'Select one option',

  [TRANSLATION_KEYS.startTypingThenChooseFromTheList]:
    'Start typing, then choose from the list',
  [TRANSLATION_KEYS.or]: 'or',

  //About the Waste - Waste codes and descriptions
  [TRANSLATION_KEYS.notApplicable]: 'Not applicable',
  [TRANSLATION_KEYS.onlySelectThisOptionIfTheWasteIsGoingToALaboratory]:
    'Only select this option if the waste is going to a laboratory',
  [TRANSLATION_KEYS.doYouHaveAnEWCCode]: 'Do you have an EWC code?',
  [TRANSLATION_KEYS.anEwcCodeEuropeanWasteCatalogueCodeIsAlsoKnownAsAnECListOfWaste]:
    'An EWC code (European Waste Catalogue code) is also known as an EC list of waste.',
  [TRANSLATION_KEYS.enterAnEWCCode]: 'Enter an EWC code?',
  [TRANSLATION_KEYS.doYouNeedToAddAnotherEWCCode]:
    'Do you need to add another EWC code?',
  [TRANSLATION_KEYS.doYouHaveANationalCode]: 'Do you have a national code?',
  [TRANSLATION_KEYS.aNationalCodeIsAlsoKnownAsACommodityCodeAndMayBeRequiredByTheCountryYoureExportingTo]:
    "A national code is also known as a commodity code and may be required by the country you're exporting to.",
  [TRANSLATION_KEYS.itsNotRequiredByUkRegulators]:
    "It's not required by UK regulators.",
  [TRANSLATION_KEYS.enterCode]: 'Enter code',
  [TRANSLATION_KEYS.describeTheWaste]: 'Describe the waste',
  [TRANSLATION_KEYS.yourDescriptionCouldIncludeThingsLike]:
    'Your description could include things like:',
  [TRANSLATION_KEYS.internationalSpecificationOrGradeForExampleEN643ForPaper]:
    'international specification or grade (for example,EN643 2.05.00 for paper)',
  [TRANSLATION_KEYS.polymerTypeForPlasticForExampleLpdeFilm]:
    'polymer type for plastic (for example, LPDE film)',

  //Quantity of Waste
  [TRANSLATION_KEYS.doYouKnowTheQuantityOfWaste]:
    'Do you know the quantity of waste?',
  [TRANSLATION_KEYS.onlyProvideTheNetWeightOrVolumeDoNotIncludeTheWeightOfTheContainerOrVehicle]:
    'Only provide the net weight or volume. Do not include the weight of the container or vehicle.',
  [TRANSLATION_KEYS.weightIn]: 'Weight, in ',
  [TRANSLATION_KEYS.tonnes]: 'tonnes',
  [TRANSLATION_KEYS.cubicMetres]: 'cubic metres',
  [TRANSLATION_KEYS.switchMeasurementTo]: 'Switch measurement to ',
  [TRANSLATION_KEYS.cubicMetresM3]: 'Cubic Metres (m3)',
  [TRANSLATION_KEYS.tonnesMg]: 'Tonnes (Mg)',
  [TRANSLATION_KEYS.youllNeedToUpdateThisWithActualDetailsAsSoonAsPossibleAfterSubmittingThisExport]:
    "You'll need to update this with actual details assoon as possible after submitting this export.",
  [TRANSLATION_KEYS.doYouKnowWhenTheWasteWillBeCollected]:
    'Do you know when the waste will be collected?',
  [TRANSLATION_KEYS.acidAlkylSludges050104]: '050104*: acid alkyl sludges',
  [TRANSLATION_KEYS.wastesFromMineralMetalliferousExcavation010101]:
    '010101: wastes from mineral metalliferous excavation',
  [TRANSLATION_KEYS.oilContainingAcids050112]: '050112*: oil containing acids',
  [TRANSLATION_KEYS.youHaveAdded3EWCCodes]: 'You have added 3 EWC codes',
};
