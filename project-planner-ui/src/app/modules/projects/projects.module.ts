import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { ProjectsService } from './services/projects.service';

import { ProjectListComponent } from './components/project-list/project-list.component';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';


@NgModule({
    declarations: [
    ProjectListComponent,
    HeaderComponent,
    ProjectDetailComponent,
    ProjectsComponent,
    ProjectCreateComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        FontAwesomeModule,
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