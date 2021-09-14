import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http';
import { ProjectsRoutingModule } from "./projects-routing.module";

import { ProjectsService } from './services/projects.service';

import { ProjectListComponent } from './components/project-list/project-list.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
    ProjectListComponent
  ],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        HttpClientModule
    ],
    providers: [
        ProjectsService
    ],
    exports: []
})
export class ProjectsModule {}