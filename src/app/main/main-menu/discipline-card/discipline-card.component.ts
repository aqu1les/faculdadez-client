import { Component, Input, OnInit } from "@angular/core";
import { Discipline } from "../../../interfaces/discipline";
import { Router } from "@angular/router";
import { ASSETS_DIR } from "src/environments/environment";

@Component({
  selector: "app-discipline-card",
  templateUrl: "./discipline-card.component.html",
  styleUrls: ["./discipline-card.component.scss"]
})
export class DisciplineCardComponent implements OnInit {

	@Input() discipline: Discipline;
	readonly ASSETS_DIR = ASSETS_DIR;
	constructor(private router: Router) { }

	ngOnInit() {
	}

	show(id: number) {
		this.router.navigateByUrl(`/main/d/${id}`);
	}
}
