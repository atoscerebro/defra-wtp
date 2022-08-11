import { defaultKeys as addressKeys } from '../components/address-form/constants';
import { defaultKeys as contactKeys } from '../components/contact-form/constants';

export const TRANSLATION_KEYS = {
  // Home page translations
  greenListWasteOverview: 'greenListWasteOverview',
  tellUsAboutAnExport: 'tellUsAboutAnExport',
  submitAnExport: 'submitAnExport',
  continueADraftExport: 'continueADraftExport',
  allExports: 'allExports',
  updateAnExportWithActualDetails: 'updateAnExportWithActualDetails',
  viewSubmittedExports: 'viewSubmittedExports',
  accessibilityStatement: 'accessibilityStatement',
  cookies: 'cookies',
  privacyNotice: 'privacyNotice',
  change: 'change',
  clearData: 'clearData',
  crownCopyright: 'crownCopyright',

  // Header
  exportGreenListWaste: 'exportGreenListWaste',

  // Unique reference page
  yourReferenceNumber: 'yourReferenceNumber',
  doYouWantToAddYourOwnReferenceNumberToThisExport:
    'doYouWantToAddYourOwnReferenceNumberToThisExport',
  yes: 'yes',
  no: 'no',
  enterYourReferenceNumber: 'enterYourReferenceNumber',
  submissionIncomplete: 'submissionIncomplete',
  submissionComplete: 'submissionComplete',
  youHaveCompleted: 'youHaveCompleted',
  of: 'of',
  sections: 'sections',

  // Task list groups
  aboutTheWaste: 'aboutTheWaste',
  wasteCodesAndDescriptions: 'wasteCodesAndDescriptions',
  quantityOfWaste: 'quantityOfWaste',
  collectionDate: 'collectionDate',
  exporterAndImporter: 'exporterAndImporter',
  exporterDetails: 'exporterDetails',
  importerDetails: 'importerDetails',
  journeyOfWaste: 'journeyOfWaste',
  wasteCarriers: 'wasteCarriers',
  wasteCollectionDetails: 'wasteCollectionDetails',
  locationWasteLeavesTheUk: 'locationWasteLeavesTheUk',
  countriesWasteWillTravelThrough: 'countriesWasteWillTravelThrough',
  treatmentOfWaste: 'treatmentOfWaste',
  recoveryFacilityOrLaboratory: 'recoveryFacilityOrLaboratory',

  // Breadcrumbs
  wasteTrackingService: 'wasteTrackingService',

  // Task List Statuses
  cannotStart: 'cannotStart',
  notStartedYet: 'notStartedYet',
  inProgress: 'inProgress',
  completed: 'completed',

  // About the waste
  // Waste Codes and Descriptions
  back: 'back',
  returnToSubmitAnExport: 'returnToSubmitAnExport',
  whatIsTheWasteCode: 'whatIsTheWasteCode',
  selectOneOption: 'selectOneOption',
  startTypingThenChooseFromTheList: 'startTypingThenChooseFromTheList',
  or: 'or',
  notApplicable: 'Not applicable',
  onlySelectThisOptionIfTheWasteIsGoingToALaboratory:
    'onlySelectThisOptionIfTheWasteIsGoingToALaboratory',
  doYouHaveAnEWCCode: 'doYouHaveAnEWCCode',
  anEwcCodeEuropeanWasteCatalogueCodeIsAlsoKnownAsAnECListOfWaste:
    'anEwcCodeEuropeanWasteCatalogueCodeIsAlsoKnownAsAnECListOfWaste',
  enterAnEWCCode: 'enterAnEWCCode',
  doYouNeedToAddAnotherEWCCode: 'doYouNeedToAddAnotherEWCCode',
  doYouHaveANationalCode: 'doYouHaveANationalCode',
  aNationalCodeIsAlsoKnownAsACommodityCodeAndMayBeRequiredByTheCountryYoureExportingTo:
    'aNationalCodeIsAlsoKnownAsACommodityCodeAndMayBeRequiredByTheCountryYoureExportingTo',
  itsNotRequiredByUkRegulators: 'itsNotRequiredByUkRegulators',
  enterCode: 'enterCode',
  describeTheWaste: 'describeTheWaste',
  yourDescriptionCouldIncludeThingsLike:
    'yourDescriptionCouldIncludeThingsLike',
  internationalSpecificationOrGradeForExampleEN643ForPaper:
    'internationalSpecificationOrGradeForExampleEN643ForPaper',
  polymerTypeForPlasticForExampleLpdeFilm:
    'polymerTypeForPlasticForExampleLpdeFilm',

  //Quantity of Waste
  doYouKnowTheQuantityOfWaste: 'doYouKnowTheQuantityOfWaste',
  onlyProvideTheNetWeightOrVolumeDoNotIncludeTheWeightOfTheContainerOrVehicle:
    'onlyProvideTheNetWeightOrVolumeDoNotIncludeTheWeightOfTheContainerOrVehicle',
  weightIn: 'weightIn',
  tonnes: 'tonnes',
  cubicMetres: 'cubicMetres',
  switchMeasurementTo: 'switchMeasurementTo',
  cubicMetresM3: 'cubicMetresM3',
  tonnesMg: 'tonnesMg',
  youllNeedToUpdateThisWithActualDetailsAsSoonAsPossibleAfterSubmittingThisExport:
    'youllNeedToUpdateThisWithActualDetailsAsSoonAsPossibleAfterSubmittingThisExport',
  doYouKnowWhenTheWasteWillBeCollected: 'doYouKnowWhenTheWasteWillBeCollected',

  //EWC Waste code Descriptions
  acidAlkylSludges050104: 'acidAlkylSludges050104',
  wastesFromMineralMetalliferousExcavation010101:
    'wastesFromMineralMetalliferousExcavation010101',
  oilContainingAcids050112: 'oilContainingAcids050112',
  youHaveAdded3EWCCodes: 'youHaveAdded3EWCCodes',
  thisMustBeOn11July2022OrAfter: 'thisMustBeOn11July2022OrAfter',
  noIllEnterAnEstimate: 'noIllEnterAnEstimate',
  enterTheDate: 'enterTheDate',
  enterAnEstimateDate: 'enterAnEstimateDate',
  forExample2592022: 'forExample2592022',

  //Exporter and Importer
  whatsTheExporterAddress: 'whatsTheExporterAddress',
  contactDetails: 'contactDetails',
  exportersDetails: 'exportersDetails',
  organisationName: 'organisationName',
  changeAddress: 'changeAddress',
  address: 'address',
  whosTheImporter: 'whosTheImporter',
  includeTheCountryCodeForInternationalNumbers:
    'includeTheCountryCodeForInternationalNumbers',

  //Journey of Waste
  whoIsTheWasteCarrier: 'whoIsTheWasteCarrier',
  youllBeAbleToUpdateTheseDetailsAfterSubmittingThisExport:
    'youllBeAbleToUpdateTheseDetailsAfterSubmittingThisExport',
  howWillTheWasteCarrierTransportTheWaste:
    'howWillTheWasteCarrierTransportTheWaste',
  road: 'road',
  rail: 'rail',
  sea: 'sea',
  air: 'air',
  enterContainerNumberOrVehicleRegistrationNumberOptional:
    'enterContainerNumberOrVehicleRegistrationNumberOptional',
  enterContainerNumberOptional: 'enterContainerNumberOptional',
  enterFlightNumberOptional: 'enterFlightNumberOptional',
  firstWasteCarrier: 'firstWasteCarrier',
  additionalWasteCarriers: 'additionalWasteCarriers',
  doYouNeedToAddAnotherWasteCarrier: 'doYouNeedToAddAnotherWasteCarrier',
  youCanHaveUpTo5AdditionalWasteCarriers:
    'youCanHaveUpTo5AdditionalWasteCarriers',
  wellUseThisAsTheExportingCountry: 'wellUseThisAsTheExportingCountry',
  whereWillTheWasteCarrierCollectTheWasteFrom:
    'whereWillTheWasteCarrierCollectTheWasteFrom',
  doYouKnowTheLocationAtWhichTheWasteWillLeaveTheUk:
    'doYouKnowTheLocationAtWhichTheWasteWillLeaveTheUk',
  enterLocation: 'enterLocation',
  areThereAnyOtherCountriesTheWasteWillTravelThrough:
    'areThereAnyOtherCountriesTheWasteWillTravelThrough',
  doNotIncludeTheExportingOrImportingCountry:
    'doNotIncludeTheExportingOrImportingCountry',
  enterCountriesInOrderOfTravel: 'enterCountriesInOrderOfTravel',

  //Treatment of waste
  laboratoryDetails: 'laboratoryDetails',
  wellAlsoUseThisAsTheImportingCountry: 'wellAlsoUseThisAsTheImportingCountry',
  whatIsTheDisposalCode: 'whatIsTheDisposalCode',
  laboratoryName: 'laboratoryName',

  // Contact Form
  ...contactKeys,

  // Address Form
  ...addressKeys,
};
