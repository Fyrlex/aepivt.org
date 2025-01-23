import mongoose, { HydratedDocument, Model, Schema } from 'mongoose';

export interface IMinorBoardOfficer {
  name: string;
  position: string;
  gradYear: string;
}

export type MinorBoardOfficerDocument = HydratedDocument<IMinorBoardOfficer>;

export type MinorBoardOfficerModel = Model<MinorBoardOfficerDocument>;

export const MinorBoardOfficerSchema = new Schema<IMinorBoardOfficer, MinorBoardOfficerModel>({
  gradYear: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String, required: true },
  position: { type: Schema.Types.String, required: true },
},
  {
    collection: 'minorboard',
  },
);

export const MinorBoardOfficer = mongoose.models.MinorBoardOfficer as MinorBoardOfficerModel || mongoose.model<IMinorBoardOfficer, MinorBoardOfficerModel>('MinorBoardOfficer', MinorBoardOfficerSchema);
