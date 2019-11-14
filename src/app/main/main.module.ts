import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MainRoutingModule } from "./main-routing.module";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { DisciplineCardComponent } from "./main-menu/discipline-card/discipline-card.component";
import { SchoolRecordComponent } from "./school-record/school-record.component";
import { MainComponent } from "./main.component";
import { SupportComponent } from "./support/support.component";
import { SemesterComponent } from "./school-record/semester/semester.component";
import { DisciplineComponent } from "./school-record/semester/discipline/discipline.component";
import { ShowDisciplineComponent } from "./show-discipline/show-discipline.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
	declarations: [
		MainComponent,
		MainMenuComponent,
		AppHeaderComponent,
		DisciplineCardComponent,
		SchoolRecordComponent,
		SupportComponent,
		SemesterComponent,
		DisciplineComponent,
		ShowDisciplineComponent
	],
	imports: [
		CommonModule,
		MainRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class MainModule { }
