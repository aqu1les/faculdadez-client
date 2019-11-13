import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { SchoolRecordComponent } from "./school-record/school-record.component";
import { MainComponent } from "./main.component";
import { SupportComponent } from "./support/support.component";
import { ShowDisciplineComponent } from "./show-discipline/show-discipline.component";


const routes: Routes = [
	{ path: "", component: MainComponent, children: [
		{ path: "", redirectTo: "disciplines" },
		{ path: "schoolRecord", component: SchoolRecordComponent },
		{ path: "support", component: SupportComponent },
		{ path: "disciplines", component: MainMenuComponent },
		{ path: "d/:id", component: ShowDisciplineComponent }
	]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
