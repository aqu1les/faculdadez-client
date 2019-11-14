import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {

	public bgImg = `${environment.ASSETS_DIR}/main-bg.png`;
	constructor() { }

	ngOnInit() {
	}

}
