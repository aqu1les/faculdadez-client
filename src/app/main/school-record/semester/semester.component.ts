import { Component, Input, OnInit } from "@angular/core";
import { Discipline } from "../../../interfaces/discipline";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-semester",
  templateUrl: "./semester.component.html",
  styleUrls: ["./semester.component.scss"]
})
export class SemesterComponent implements OnInit {

	@Input() disciplines: Discipline[];
	@Input() semester: number;
	readonly ASSETS_DIR = environment.ASSETS_DIR;
	constructor() { }

	ngOnInit() { }

	open(id: number) {
		document.getElementById(`${id}`).classList.toggle("closed");
	}
}
