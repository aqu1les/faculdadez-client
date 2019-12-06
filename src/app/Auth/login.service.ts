import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class LoginService {
	readonly API_URL = environment.API_URL;
	private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	constructor(private http: HttpClient) {}

	login(credentials: { cpf: string; password: string }) {
		return this.http
			.post(`${this.API_URL}/api/auth/login`, credentials)
			.pipe(
				tap((response: { token: string }) => {
					sessionStorage.setItem("token", response.token);
					this.loggedIn$.next(true);
				})
			);
	}

	isAuthenticated(): Observable<boolean> {
		sessionStorage.getItem("token")
			? this.loggedIn$.next(true)
			: this.loggedIn$.next(false);
		return this.loggedIn$.asObservable();
	}
	logout() {
		sessionStorage.removeItem("token");
		this.loggedIn$.next(false);
	}
}
