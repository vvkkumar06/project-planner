import {model, Schema, SchemaTypes } from 'mongoose';
import { Sprint } from './sprint';

export const TaskSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, maxlength: 500},
    hours: {type:Number, maxlength:3},
    sprint: {type: SchemaTypes.ObjectId, ref: "Sprints", required: true}
})

export const TaskModel = model<Task>('Tasks', TaskSchema);

export type Task = {
    _id: string;
    name: string;
    description?: string;
    hours?: number;
    sprint: Sprint;
}