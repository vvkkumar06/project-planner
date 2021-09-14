import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./shared/components/welcome/welcome.component";


const routes: Routes = [
    {
        path: "",
        component: WelcomeComponent
    },
    {
        path: "projects",
        loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }