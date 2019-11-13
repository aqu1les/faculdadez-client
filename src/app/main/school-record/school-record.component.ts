import { Component, OnInit } from "@angular/core";
import { MainService } from "../services/main.service";
import { SchoolRecord } from "../../interfaces/school-record";
import { Discipline } from "../../interfaces/discipline";

@Component({
	selector: "app-school-record",
	templateUrl: "./school-record.component.html",
	styleUrls: ["./school-record.component.scss"]
})
export class SchoolRecordComponent implements OnInit {

	private schoolRecord: SchoolRecord;
	private semesters: [Discipline[]];
	constructor(private mainService: MainService) { }

	ngOnInit() {
		this.mainService.getSchoolRecord()
			.subscribe(
				(data: SchoolRecord) => {
				    this.schoolRecord = data;
		            this.semesters = data.disciplines;
				}
			);
	}

}
