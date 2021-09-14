import mongoose from 'mongoose';
import { Logger, LogType } from '../utils/logger';
import { Project, ProjectSchema } from './../entities/project';
import { Sprint, SprintSchema } from './../entities/sprint';
import { Task, TaskSchema } from './../entities/task';
const logger = new Logger("db");
const options = {
    dbName: "ProjectPlanner",
    autoIndex: true,
    autoCreate: true

};



mongoose.connect(process.env.DB_URI as string, options, (err) => {
    if(!err) {
        logger.log('Database Connected');
        mongoose.model<Project>('projects', ProjectSchema);
        mongoose.model<Sprint>('sprints', SprintSchema);
        mongoose.model<Task>('tasks', TaskSchema);
    } else {
        logger.log(err.toString(), LogType.ERROR);
    }
});


