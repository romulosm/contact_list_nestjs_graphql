import {
  Model,
  Document,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from 'mongoose';

export abstract class MongooseRepository<T extends Document> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  findOne(
    criteria: FilterQuery<T>,
    projection?: object | null,
    options?: QueryOptions | null,
  ) {
    const filter = { ...criteria, deletedAt: { $exists: false } };
    return this.model.findOne(filter, projection, options);
  }

  async find(
    criteria: FilterQuery<T>,
    projection?: object,
    options?: QueryOptions | null,
  ): Promise<T[]> {
    const filter = { ...criteria, deletedAt: { $exists: false } };
    return await this.model.find(filter, projection, options);
  }

  async updateOne(criteria: FilterQuery<T>, update: UpdateQuery<T>) {
    const filter = { ...criteria, deletedAt: { $exists: false } };
    return await this.model.updateOne(filter, update);
  }
}
