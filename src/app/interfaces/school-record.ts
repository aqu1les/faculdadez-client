import { Discipline } from "./discipline";

export interface SchoolRecord {
	id: string;
	name: string;
	total_semesters: string;
	disciplines: [
		Discipline[]
	];
}
