import { Course } from "./course";

export interface Student {
	id: number;
	name: string;
	cpf: string;
	registration: string;
	current_semester: number;
	course?: Course;
}
