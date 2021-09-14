import { Sprint, SprintModel } from "../entities/sprint";
import { BaseRepository } from "./base-repository";

export default class SprintRepository extends BaseRepository<Sprint>{
    constructor() {
        super(SprintModel,
            {
                populate: [
                    {
                        path: "tasks"
                    },
                    {
                        path: "project"
                    }
                ]
            }
        );
    }
}