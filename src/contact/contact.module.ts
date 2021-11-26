import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactPerson, ContactPersonSchema } from './schema/contact.schema';
import { ContactService } from './contact.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ContactPerson.name, schema: ContactPersonSchema },
    ]),
  ],
  providers: [ContactService],
})
export class ContactModule {}
