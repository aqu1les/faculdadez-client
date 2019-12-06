import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Student } from "../../interfaces/student";
import { SchoolRecord } from "../../interfaces/school-record";
import { Discipline } from "../../interfaces/discipline";

@Injectable({
	providedIn: "root"
})
export class MainService {
	readonly API_URL = environment.API_URL;
	private studentInfo$: BehaviorSubject<Student> = new BehaviorSubject<
		Student
	>(null);
	public disciplines: BehaviorSubject<Discipline[]> = new BehaviorSubject<
		Discipline[]
	>(null);

	constructor(private http: HttpClient) {
		this.loadStudentInfo();
	}

	private loadStudentInfo() {
		return this.http
			.get(`${this.API_URL}/api/students/me`)
			.subscribe((studentInfo: Student) => {
				this.studentInfo$.next(studentInfo);
				this.disciplines.next(studentInfo.course.disciplines);
			});
	}
	getStudentInfo(): Observable<Student> {
		return this.studentInfo$.asObservable();
	}
	getSchoolRecord(): Observable<SchoolRecord> {
		return this.http.get<SchoolRecord>(
			`${this.API_URL}/api/students/me/schoolRecord`
		);
	}
	getDisciplines() {
		return this.disciplines.asObservable();
	}

	sendFeedback(feedback: { name: string; email: string; message: string }) {
		return this.http.post(
			`${this.API_URL}/api/students/feedback`,
			feedback
		);
	}
}
