import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MainService } from "../services/main.service";
import { Discipline } from "../../interfaces/discipline";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-show-discipline",
  templateUrl: "./show-discipline.component.html",
  styleUrls: ["./show-discipline.component.scss"]
})
export class ShowDisciplineComponent implements OnInit {

	private discipline: Discipline;
	private id: number;

	constructor(
		private activeRoute: ActivatedRoute,
		private mainService: MainService) { }

	ngOnInit() {
		this.activeRoute.params.subscribe( params => {
			this.id = params.id;
		});
		this.mainService.getDisciplines().pipe(
			tap((data: Discipline[]) => {
				if (data) {
					this.discipline = data.find(d => d.id == this.id);
				}
			})
		).subscribe();
	}

}
