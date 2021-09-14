import { Task, TaskModel } from "../entities/task";
import { BaseRepository } from "./base-repository";

export default class TaskRepository extends BaseRepository<Task>{
    constructor() {
        super(TaskModel,
            {
                populate: [{
                    path: "sprint"
                }
                ]
            }
        );
    }
}