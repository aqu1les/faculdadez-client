import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class LoginService {
	readonly API_URL = environment.API_URL;
	constructor(private http: HttpClient) {}

	login(credentials: { cpf: string; password: string }) {
		return this.http
			.post(`${this.API_URL}/api/auth/login`, credentials)
			.pipe(
				tap((response: { token: string }) => {
					sessionStorage.setItem("token", response.token);
				})
			);
	}

	isAuthenticated(): boolean {
		return sessionStorage.getItem("token") ? true : false;
	}
	logout() {
		sessionStorage.removeItem("token");
	}
}
