import { PopulateOptions } from "mongoose";
import { Project, ProjectModel } from "../entities/project";
import { BaseRepository } from "./base-repository";

export default class ProjectRepository extends BaseRepository<Project>{
    constructor() {
        super(ProjectModel, {
            populate: [{
                path: "sprints"
            } as PopulateOptions]
        });
    }
}