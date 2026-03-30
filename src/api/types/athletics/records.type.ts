import { GenericElement } from "../common/generic.type";

export type AthleteEarlierRecordDto = {
    readonly AthleteFullName: string;
    readonly AthleteRecordValue: number;
    readonly DisciplineMeasurementUnitShortName: string;
};
export type AthleteRecordDto = {
    readonly athleteRecordType: string;
    readonly athleteRecordValue: number;
    readonly disciplineMeasurementUnitShortName: string;
    readonly disciplineName: string;
    readonly athleteRecordYear: number;      // number, not string
    readonly athleteRecordVenue: string;
    readonly athleteRecordCategory: string;
    readonly athleteGender: string;
    readonly athleteFullName: string;
    athleteEarlierRecords: AthleteEarlierRecordDto[];
};


// ──────────────────────────────────────────────
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type AthleteRecordWrapperDto = {
    readonly athleteRecord: AthleteRecordDto;
    // readonly pageGenericElements: GenericElement;
};
