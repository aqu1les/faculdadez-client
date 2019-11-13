import { Component, Input, OnInit } from "@angular/core";
import { Discipline } from "../../../interfaces/discipline";

@Component({
  selector: "app-semester",
  templateUrl: "./semester.component.html",
  styleUrls: ["./semester.component.scss"]
})
export class SemesterComponent implements OnInit {

	@Input() disciplines: Discipline[];
	@Input() semester: number;
	constructor() { }

	ngOnInit() { }

	open(id: number) {
		document.getElementById(`${id}`).classList.toggle("closed");
	}
}
