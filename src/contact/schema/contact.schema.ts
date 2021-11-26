import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactPersonDocument = ContactPerson & Document;

@Schema({ timestamps: true })
export class ContactPerson {
  @Prop()
  guid: string;

  @Prop()
  picture: string;

  @Prop()
  age: number;

  @Prop()
  eyeColor: string;

  @Prop()
  name: string;

  @Prop()
  gender: string;

  @Prop()
  company: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  address: number;

  @Prop()
  registered: Date;
  @Prop()
  createdAt: Date;

  @Prop({ required: false })
  updatedAt: Date;
}

export const ContactPersonSchema = SchemaFactory.createForClass(ContactPerson);
