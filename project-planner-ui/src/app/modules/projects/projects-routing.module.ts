import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailComponent } from "./components/project-detail/project-detail.component";
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { ProjectsComponent } from "./components/projects/projects.component";
const routes: Routes = [
    {
        path: "",
        component: ProjectsComponent,
        children: [
            {
                path: "",
                component: ProjectListComponent
            },
            {
                path: "details",
                component: ProjectDetailComponent
            }
        ]
    }
   
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {}
