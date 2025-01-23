import mongoose, { HydratedDocument, Model, Schema } from 'mongoose';

export interface IRushEvent {
  title: string;
  startTime: Date;
  location: string;
  type: 'open' | 'closed';
}

export type RushEventDocument = HydratedDocument<IRushEvent>;

export type RushEventModel = Model<RushEventDocument>;

export const RushEventSchema = new Schema<IRushEvent, RushEventModel>({
  location: { type: Schema.Types.String, required: true },
  startTime: { type: Schema.Types.Date, required: true },
  title: { type: Schema.Types.String, required: true },
  type: { type: Schema.Types.String, required: true },
},
  {
    collection: 'rush',
  },
);

export const RushEvent = mongoose.models.RushEvent as RushEventModel || mongoose.model<IRushEvent, RushEventModel>('RushEvent', RushEventSchema);
