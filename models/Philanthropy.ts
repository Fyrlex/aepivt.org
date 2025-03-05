import mongoose, { HydratedDocument, Model, Schema, model } from 'mongoose';

export interface PhilanthropyOptions {
  title: string;
  subtitle: string;
  description: string;
  donateUrl: string;
  imageUrl: string;
}

export type PhilanthropyDocument = HydratedDocument<PhilanthropyOptions>;

export type PhilanthropyModel = Model<PhilanthropyOptions>;

const PhilanthropySchema = new Schema<PhilanthropyOptions, PhilanthropyModel>({
  description: { type: String, required: true },
  donateUrl: { type: String, required: true },
  imageUrl: { type: String, required: true },
  subtitle: { type: String, required: true },
  title: { type: String, required: true },
},
  {
    collection: 'philanthropy',
  });

export const Philanthropy = mongoose.models.Philanthropy || model<PhilanthropyOptions, PhilanthropyModel>(
  'Philanthropy',
  PhilanthropySchema,
);
