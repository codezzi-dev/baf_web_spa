import { GenericElement } from "../common/generic.type";

export type AthleteEarlierRecordDto = {
    readonly AthleteFullName: string;
    readonly AthleteRecordValue: number;
    readonly DisciplineMeasurementUnitShortName: string;
};
export type AthleteRecordDto = {
    readonly AthleteRecordType: string;
    readonly AthleteRecordValue: number;
    readonly DisciplineMeasurementUnitShortName: string;
    readonly DisciplineName: string;
    readonly AthleteRecordYear: string;
    readonly AthleteRecordVenue: string;
    readonly AthleteRecordCategory: string;
    readonly AthleteGender: string;
    readonly AthleteFullName: string;
    AthleteEarlierRecords: AthleteEarlierRecordDto[]
};


// ──────────────────────────────────────────────
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type AthleteRecordWrapperDto = {
    readonly athleteRecord: AthleteRecordDto;
    // readonly pageGenericElements: GenericElement;
};
