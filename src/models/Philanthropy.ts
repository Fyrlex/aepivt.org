import mongoose, { HydratedDocument, Model, Schema } from 'mongoose';

export interface IPhilanthropy {
  title: string;
  description: string;
  longDescription: string;
  startDate: Date;
  endDate: Date;
  donateURL: string;
}

export type PhilanthropyDocument = HydratedDocument<IPhilanthropy>;

export type PhilanthropyModel = Model<PhilanthropyDocument>;

export const PhilanthropySchema = new Schema<IPhilanthropy, PhilanthropyModel>({
  description: { type: Schema.Types.String, required: true },
  endDate: { type: Schema.Types.Date, required: true },
  longDescription: { type: Schema.Types.String, required: true },
  startDate: { type: Schema.Types.Date, required: true },
  title: { type: Schema.Types.String, required: true },
  donateURL: { type: Schema.Types.String, required: false },
},
  {
    collection: 'philanthropy',
  },
);

export const Philanthropy = mongoose.models.Philanthropy as PhilanthropyModel || mongoose.model<IPhilanthropy, PhilanthropyModel>('Philanthropy', PhilanthropySchema);
