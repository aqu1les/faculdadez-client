import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ASSETS_DIR } from "src/environments/environment";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

	readonly ASSETS_DIR = ASSETS_DIR;
	private authForm = this.formBuilder.group({
		cpf: ["", [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
		password: ["", [Validators.required]]
	});
	private errorForm;

	constructor(
		private formBuilder: FormBuilder,
		private loginService: LoginService,
		private router: Router) {}

	ngOnInit() {}

	submitForm() {
		this.loginService.login(this.authForm.value).subscribe(
			() => {
				this.router.navigateByUrl("/main");
			}, resp => {
				this.errorForm = resp.error.error;
				setTimeout(() => {
					this.errorForm = "";
				}, 3000);
			}
		);
	}
}
