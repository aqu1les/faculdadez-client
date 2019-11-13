import {Component, Input, OnInit, ViewChild} from "@angular/core";
import { ASSETS_DIR } from "src/environments/environment";
import { Student } from "../../interfaces/student";
import { LoginService } from "../../Auth/login.service";
import { Router } from "@angular/router";
import { MainService } from "../services/main.service";

@Component({
	selector: "app-header",
	templateUrl: "./app-header.component.html",
	styleUrls: ["./app-header.component.scss"]
})
export class AppHeaderComponent implements OnInit {

	@ViewChild("dropdownContent", {static: true}) dropdownContent: any;
	@ViewChild("dropdownIcon", {static: true}) dropdownIcon: any;
	@ViewChild("nav", {static: true}) nav: any;

	readonly ASSETS_DIR = ASSETS_DIR;
	private studentInfo: Student;
	constructor(
		private loginService: LoginService,
		private router: Router,
		private mainService: MainService
		) { }

	ngOnInit() {
		this.mainService.getStudentInfo()
			.subscribe((student: Student) => {
				this.studentInfo = student;
			});
	}
	toggleDD() {
		this.dropdownContent.nativeElement.classList.toggle("open");
		this.dropdownIcon.nativeElement.classList.toggle("open");
	}
	openMenu() {
		this.nav.nativeElement.classList.toggle("open");
	}
	logout() {
		this.loginService.logout();
		this.router.navigateByUrl("login");
	}
}
