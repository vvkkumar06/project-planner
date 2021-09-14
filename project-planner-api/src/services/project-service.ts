import { Project } from "../entities/project";
import ResponseEntity from "../entities/response";
import ProjectRepository from "../repositories/project-repository";

export default class ProjectService {

    private repo: ProjectRepository;
    constructor() {
        this.repo = new ProjectRepository();
    }

    async getProjectById(id: string): Promise<ResponseEntity<Project>> {
        try {
            if(!id){
                return new ResponseEntity<Project>().sendBadRequest();
            } else {
                let result = await this.repo.findById(id);
                return new ResponseEntity<Project>(result as Project);
            }
        } catch (err) {
            return new ResponseEntity<Project>().sendInternalError();
        }
    }

    async getProjects() {
        try {
            let result = await this.repo.findAll();
            return new ResponseEntity<Project[]>(result as Project[]);
        } catch (err) {
            return new ResponseEntity<Project>().sendInternalError();
        }
    }

    async addProject(project: Project) {
        try {
            let result = await this.repo.addOne(project);
            return new ResponseEntity<Project>(result);
        } catch (err) {
            return new ResponseEntity<Project>().sendInternalError();
        }
    }

    async updateProject(project: Project) {

        try {
            if (!project._id) {
                return new ResponseEntity<Project>().sendBadRequest();
            } else {
                let result = await this.repo.updateOne(project);
                return new ResponseEntity<any>(result);
            }
           
        } catch (err) {
            return new ResponseEntity<Project>().sendInternalError();
        } 
    }

    async removeProject(id: string) {
        try {
            if (!id) {
                return new ResponseEntity<Project>().sendBadRequest();
            } else {
                let result = await this.repo.deleteOne(id);
                return new ResponseEntity<Project>(result as any);
            }
        } catch (err) {
            return new ResponseEntity<Project>().sendInternalError();
        }
    }
}