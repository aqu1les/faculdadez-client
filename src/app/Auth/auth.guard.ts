import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot
} from "@angular/router";
import { LoginService } from "./login.service";
import { tap } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanActivate {
	constructor(private loginService: LoginService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this.loginService.isAuthenticated()) {
			return true;
		} else {
			return this.router.navigateByUrl("/login");
		}
	}
}
