export interface Project {
    _id?: string;
    name: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    sprints?: any
}