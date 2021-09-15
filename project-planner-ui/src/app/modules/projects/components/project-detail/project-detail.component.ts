import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectsService } from '../../services/projects.service';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
    project: Project;
    projectForm: FormGroup;
    submitted = false;

    constructor(private router: Router, private fb: FormBuilder, private projectService: ProjectsService) {
        this.project = this.router.getCurrentNavigation()?.extras.state?.project;
        const { name, description, startDate, endDate, _id } = this.project || {
            name: '',
            description: '',
            startDate: '',
            endDate: ''
        };
        this.projectForm = this.project && this.fb.group({
            _id: [_id],
            name: [name, Validators.required],
            description: [description],
            startDate: [formatDate(startDate, 'yyyy-MM-dd', 'en'), Validators.required],
            endDate: [formatDate(endDate, 'yyyy-MM-dd', 'en'), Validators.required]
        });
    }

    ngOnInit(): void {
        if (!this.project) {
            this.router.navigate(['/projects'])
        }
    }


    get f() {
        return this.projectForm.controls;
    }

    projectUpdateHandler(): void {
        this.submitted = true;
        console.log(this.f.name.errors)
        if (this.projectForm.invalid) {
            return;
        }

        if (this.project._id) {
            this.projectService.updateProject(this.projectForm.value)
                .subscribe(res => {
                    if (!res.error) {
                        this.router.navigate(['/projects'])
                    }
                });
        }
    }
}
