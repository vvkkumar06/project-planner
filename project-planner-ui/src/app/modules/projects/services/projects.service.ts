import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiConstants } from "src/app/shared/config/api-constants";
import { Project } from "../models/project";
import { Response } from '../../../shared/models/response';


@Injectable()
export class ProjectsService {
    private baseUrl: string = apiConstants.BASE_URL;
    private projectsUrl: string =apiConstants.PROJECTS;
    constructor(
        private http: HttpClient
    ){}

    getAllProjects(): Observable<Response<Project[]>> {
        return this.http.get<Response<Project[]>>(this.baseUrl + this.projectsUrl);
    }

    updateProject(project: Project): Observable<Response<any>> {
        return this.http.put<Response<any>>(this.baseUrl + this.projectsUrl, project);
    }

}