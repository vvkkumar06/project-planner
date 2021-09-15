import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectsService } from '../../services/projects.service';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

    projects: Project[] = [];

    constructor(
        private projectService: ProjectsService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getProjects();
    }

    getProjects() {
        this.projectService.getAllProjects().subscribe((response) => { 
            this.projects = response.data as Project[];
         });
    }

    projectHandler(project: Project) {
        this.router.navigate(['/projects/details'], { 
            state: { project: project } 
          })
    }

}
