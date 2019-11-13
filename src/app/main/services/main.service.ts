import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { API_URL } from "../../../environments/environment";
import { Student } from "../../interfaces/student";
import { SchoolRecord } from "../../interfaces/school-record";
import { Discipline } from "../../interfaces/discipline";

@Injectable({
  providedIn: "root"
})
export class MainService {

	readonly API_URL = API_URL;
	private token = sessionStorage.getItem("token");
	private studentInfo$: BehaviorSubject<Student> = new BehaviorSubject<Student>(null);
	public disciplines: BehaviorSubject<Discipline[]> = new BehaviorSubject<Discipline[]>(null);

	constructor(
		private http: HttpClient) {
		this.loadStudentInfo();
	}

	private loadStudentInfo() {
		return this.http.get(`${this.API_URL}/api/students/me`, {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			}).subscribe((studentInfo: Student) => {
				this.studentInfo$.next(studentInfo);
				this.disciplines.next(studentInfo.course.disciplines);
			});
	}
	getStudentInfo(): Observable<Student> {
		return this.studentInfo$.asObservable();
	}
	getSchoolRecord(): Observable<SchoolRecord>  {
		return this.http.get<SchoolRecord>(`${this.API_URL}/api/students/me/schoolRecord`, {
			headers: {
				Authorization: `Bearer ${this.token}`
			}
		});
	}
	getDisciplines() {
		return this.disciplines.asObservable();
	}
}