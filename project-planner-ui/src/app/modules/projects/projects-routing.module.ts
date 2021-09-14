import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from "./components/project-list/project-list.component";
const routes: Routes = [
    {
        path: "",
        component: ProjectListComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: []
})
export class ProjectsRoutingModule {}