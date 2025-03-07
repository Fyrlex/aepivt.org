import mongoose, { HydratedDocument, Model, Schema, model } from 'mongoose';

export interface RushEventOptions {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

export interface RushOptions {
  interestUrl: string;
  events: RushEventOptions[];
}

export type RushDocument = HydratedDocument<RushOptions>;

export type RushModel = Model<RushOptions>;

const RushEventSchema = new Schema<RushEventOptions, RushModel>({
  date: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  time: { type: String, required: true },
  title: { type: String, required: true },
});

const RushSchema = new Schema<RushOptions, RushModel>({
  events: [RushEventSchema],
  interestUrl: { type: String, required: true },
},
  {
    collection: 'rush',
  });

export const Rush = mongoose.models.Rush || model<RushOptions, RushModel>(
  'Rush',
  RushSchema,
);
