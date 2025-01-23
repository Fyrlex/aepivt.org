import mongoose, { HydratedDocument, Model, Schema } from 'mongoose';

export interface IEboardOfficer {
  rank: number;
  name: string;
  position: string;
  image: string;
  gradYear: string;
  pledgeClass: string;
  major: string;
  email: string;
  phone: string;
  instagram: string;
  linkedin: string;
  facebook: string;
}

export type EBoardOfficerDocument = HydratedDocument<IEboardOfficer>;

export type EBoardOfficerModel = Model<EBoardOfficerDocument>;

export const EBoardOfficerSchema = new Schema<IEboardOfficer, EBoardOfficerModel>({
  gradYear: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String, required: true },
  position: { type: Schema.Types.String, required: true },
  email: { type: Schema.Types.String, required: true },
  phone: { type: Schema.Types.String, required: true },
  image: { type: Schema.Types.String, required: true },
  major: { type: Schema.Types.String, required: true },
  pledgeClass: { type: Schema.Types.String, required: true },
  instagram: { type: Schema.Types.String, required: true },
  linkedin: { type: Schema.Types.String, required: true },
  facebook: { type: Schema.Types.String, required: true },
  rank: { type: Schema.Types.Number, required: true, unique: true },
},
  {
    collection: 'eboard',
  },
);

export const EBoardOfficer = mongoose.models.EBoardOfficer as EBoardOfficerModel || mongoose.model<IEboardOfficer, EBoardOfficerModel>('EBoardOfficer', EBoardOfficerSchema);
