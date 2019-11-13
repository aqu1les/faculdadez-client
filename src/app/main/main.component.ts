import { Component, OnInit } from "@angular/core";
import { ASSETS_DIR } from "../../environments/environment";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {

	private bgImg = `${ASSETS_DIR}/main-bg.png`;
	constructor() { }

	ngOnInit() {
	}

}
