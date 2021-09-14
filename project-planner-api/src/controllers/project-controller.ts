import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Project } from "../entities/project";
import ResponseEntity from "../entities/response";
import ProjectService from "../services/project-service";


const router = Router();
const projectService: ProjectService = new ProjectService();

// Get all projects
router.get('/', async (req: Request, res: Response) => {
    const response = await projectService.getProjects();
    res.status(response.status ? response.status : StatusCodes.OK).json(response);
});

// Get project by id
router.get('/:id', async (req: Request, res: Response) => {

    const response = await projectService.getProjectById(req.params.id);
    res.status(response.status ? response.status : StatusCodes.OK).json(response);

});

// Create a new project
router.post('/', async (req: Request, res: Response) => {
    const response = await projectService.addProject(req.body as Project);
    res.status(response.status ? response.status : StatusCodes.CREATED).json(response);
});


// Update a project
router.put('/', async (req: Request, res: Response) => {
    const response = await projectService.updateProject(req.body as Project);
    res.status(response.status ? response.status : StatusCodes.OK).json(response);
});


// Delete a project
router.delete('/:id', async (req: Request, res: Response) => {
    const response = await projectService.removeProject(req.params.id);
    res.status(response.status ? response.status : StatusCodes.OK).json(response);
});



export default router;