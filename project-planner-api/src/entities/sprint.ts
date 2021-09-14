import { model, Schema, SchemaTypes } from 'mongoose';
import { Project } from './project';
import { Task } from './task';

export const SprintSchema = new Schema({
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    project: { type: SchemaTypes.ObjectId, ref: "Projects", required: true },
    tasks: [{ type: SchemaTypes.ObjectId, ref: "Tasks" }]
})

export const SprintModel = model<Sprint>('Sprints', SprintSchema);

export type Sprint = {
    _id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    project: Project;
    tasks?: Task[];
}