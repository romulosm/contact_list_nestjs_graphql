import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseRepository } from 'src/shared/MongooseRepository';

import { ContactPerson, ContactPersonDocument } from './schema/contact.schema';

@Injectable()
export class UsedReceivableRepository extends MongooseRepository<ContactPersonDocument> {
  constructor(
    @InjectModel(ContactPerson.name)
    private contactPersonModel: Model<ContactPersonDocument>,
  ) {
    super(contactPersonModel);
  }

  async findPerson(guid: string): Promise<ContactPersonDocument> {
    return await this.contactPersonModel.findOne({
      guid,
    });
  }

  async deletePerson(id: string) {
    return await this.contactPersonModel.deleteOne({ _id: id });
  }
}
