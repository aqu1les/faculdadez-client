import { Component } from "@angular/core";
import { LoginService } from "./Auth/login.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	constructor(private loginService: LoginService, private router: Router) {
		if (this.loginService.isAuthenticated())
			this.router.navigateByUrl("/main");
	}
}
