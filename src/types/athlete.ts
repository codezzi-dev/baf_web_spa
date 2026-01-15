 type athleteGenData = {
    id: string;
    athleteFullName: string;
    athleteFatherName: string;
    athleteMotherName: string;
    athleteEmail: string; // ISO date string
    athleteContactNo: string;
    athleteDob: string; // ISO date string
    athleteGender: 'Male' | 'Female' | 'Other';
    athleteAlternateContactNo?: string;
    instituteId: string;
};
type athleteIdentityData = {
    athleteIdentityDocRelatedId: string;
    athleteIdentityDocsUrls: string[];
    athleteIdentityDocCategoryId: number;
};

type athleteCoreDataInBengali = {
    athleteFullNameInBengali: string;
    athleteFatherNameInBengali: string;
    athleteMotherNameInBengali: string;
};
type athleteAddresses = {
    athleteAddressDistrictId: number;
    athleteAddressSubDistrictId: number;
    athleteAddressPostalCode: number;
    athleteAddressArea: number;
    athleteAddressType: number;
};

type athleteDocuments = {
    athleteDocName: string;
    athleteDocRelatedId: string;
    athleteDocPhysicalPathUrl: string;
    docCategoryId: number;
};

export type Athlete = {
    athleteGenData: athleteGenData;
    athleteIdentityData: athleteIdentityData;
    athleteCoreDataInBengali: athleteCoreDataInBengali;
    athleteAddresses: athleteAddresses[];
    athleteDocuments: athleteDocuments[];
};