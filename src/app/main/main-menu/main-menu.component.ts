import { Component, OnInit } from "@angular/core";
import { Student } from "../../interfaces/student";
import { MainService } from "../services/main.service";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"]
})
export class MainMenuComponent implements OnInit {

    public studentInfo: Student;
	constructor(
		private mainService: MainService
		) { }

	ngOnInit() {
		this.mainService.getStudentInfo()
			.subscribe((student: Student) => {
				this.studentInfo = student;
			});
	}

}
