import { Discipline } from "./discipline";

export interface Course {
	id: number;
	name: string;
	total_semesters: number;
	disciplines: Discipline[];
}
