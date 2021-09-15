import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http';
import { ProjectsRoutingModule } from "./projects-routing.module";

import { ProjectsService } from './services/projects.service';

import { ProjectListComponent } from './components/project-list/project-list.component';
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
    ProjectListComponent,
    HeaderComponent,
    ProjectDetailComponent,
    ProjectsComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        ProjectsRoutingModule
    ],
    providers: [
        ProjectsService
    ],
    exports: [],
    bootstrap:[ProjectsComponent]
})
export class ProjectsModule {}