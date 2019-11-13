import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./Auth/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "./Auth/auth.guard";

@NgModule({
	declarations: [AppComponent, LoginComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		NgxMaskModule.forRoot(),
		HttpClientModule
	],
	providers: [AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule {}
