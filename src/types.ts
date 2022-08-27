interface OverallData {
	numMeasures: number;
	mtc: number;
}

interface Rhythm {
	bpms: number[];
	timeSig: number[];
	accentedBeats: number[];
}

export interface Section {
	overallData: OverallData;
	rhythms: Rhythm[];
	id: string;
}