import {model, Schema, SchemaTypes } from 'mongoose';
import { Sprint } from './sprint';

export const ProjectSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, maxlength: 500},
    startDate: {type: Date, required: true },
    endDate:{type: Date, required: true},
    sprints: [{type: SchemaTypes.ObjectId, ref: "Sprints"}]
})

export const ProjectModel = model<Project>('projects', ProjectSchema);

export type Project = {
    _id?: string;
    name: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    sprints?: Sprint[];
}