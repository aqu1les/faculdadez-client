import { Component, Input, OnInit } from "@angular/core";
import { Discipline } from "../../../../interfaces/discipline";

@Component({
  selector: "app-discipline",
  templateUrl: "./discipline.component.html",
  styleUrls: ["./discipline.component.scss"]
})
export class DisciplineComponent implements OnInit {

	@Input() discipline: Discipline;
	constructor() { }

	ngOnInit() { }
}
