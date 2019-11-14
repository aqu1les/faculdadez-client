import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MainService } from "../services/main.service";
import { Student } from "../../interfaces/student";

@Component({
  selector: "app-support",
  templateUrl: "./support.component.html",
  styleUrls: ["./support.component.scss"]
})
export class SupportComponent implements OnInit {

	public feedbackForm = this.formBuilder.group({
		name: ["", [Validators.required]],
		email: ["", [Validators.required, Validators.email]],
		message: ["", [Validators.required]]
	});

	constructor(
		private formBuilder: FormBuilder,
		private mainService: MainService) { }

	ngOnInit() {
		this.mainService.getStudentInfo()
			.subscribe(
				(studentInfo: Student) => {
					if (studentInfo) {
						this.feedbackForm.controls.name.setValue(studentInfo.name);
					}
				}
			);
	}
	submit() {
		this.mainService.sendFeedback(this.feedbackForm.value)
			.subscribe(
				(response: {msg: string}) => {
					alert(response.msg);
					this.feedbackForm.reset();
				},
				(response) => {
					console.log(response);
				}
			);
	}
}
