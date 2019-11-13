import { Teacher } from "./teacher";

export interface Discipline {
	id: number;
	name: string;
	difficulty: string;
	teacher: Teacher;
	pivot: {
		course_id: number;
		discipline_id: number;
		semester: number;
	};
	grade?: {
		discipline_id: number;
		final_average: number;
		status: string;
		student_id: number;
	};
	schedules: [{
		id: number;
		starts: Date;
		ends: Date;
		weekday: string;
	}];
}
