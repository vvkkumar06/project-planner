import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';

@Component({
    selector: 'app-project-create',
    templateUrl: './project-create.component.html',
    styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

    projectForm: FormGroup;
    submitted = false;

    get f(){
        return this.projectForm.controls;
    }

    constructor(private router: Router, private fb: FormBuilder, private projectService: ProjectsService) {
        this.projectForm = this.fb.group({
            name: ['', Validators.required],
            description: [''],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required]
        });
    }

    ngOnInit(): void {
    }

    projectAddHandler(): void {
        this.submitted = true;
        console.log(this.f.name.errors)
        if(this.projectForm.invalid) {  
            return;
        }

        this.projectService.addProject(this.projectForm.value)
            .subscribe(res => {
                if (!res.error) {
                    this.router.navigate(['/projects'])
                }
            })

    }
}
