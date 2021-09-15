import { FilterQuery, Model, PopulateOptions } from 'mongoose';

export class BaseRepository<T> {
    private model: Model<T>;
    private options: Options;

    constructor(model: Model<T>, options: Options = {} as Options) {
        this.model = model;
        this.options = options;
    }

    async findById(id: string) {
        try {
            return await this.model.findById(id).populate(this.options.populate).exec();
        } catch (err: any) {
            throw new err;
        }
    }

    async findByName(name: string) {
        try {
            return await this.model.findOne({ name: name } as FilterQuery<T>).populate(this.options.populate).exec();
        } catch (err: any) {
            throw new err;
        }
    }

    async findAll(): Promise<T[]> {
        try {
            return await this.model.find().populate(this.options.populate).exec();
        } catch (err: any) {
            throw new err;
        }
    }

    async addOne(modelData: T) {
        try {
            return await this.model.create(modelData);
        } catch (err: any) {
            throw new err;
        }
    }

    async updateOne(modelData: T) {
        try {
            return await this.model.updateOne({_id: (modelData as any)._id}, modelData).exec();
        } catch (err: any) {
            throw new err;
        }
    }

    async deleteOne(id: string) {
        try {
            return await this.model.deleteOne({ _id: id } as FilterQuery<T>).exec();
        } catch (err: any) {
            throw new err;
        }
    }
}

export type Options = {
    populate: PopulateOptions[]
}

