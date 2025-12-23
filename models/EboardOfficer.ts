import mongoose, { HydratedDocument, model, Model, Schema } from 'mongoose';

export enum EboardOfficerRank {
  Master = 1,
  LeitenantMaster,
  Scribe,
  Exchequer,
  Sentinel,
  BrotherAtLarge,
  NewMemberEducator,
  RushChair,
}

export interface EboardOfficerOptions {
  name: string;
  rank: EboardOfficerRank;
  position: string;
  gradYear: number;
  pledgeClass: string;
  major: string;
  email: string;
  phone: string;
  instagram: string;
  linkedin: string;
  facebook: string;
}

export type EboardOfficerDocument = HydratedDocument<EboardOfficerOptions>;

export type EboardOfficerModel = Model<EboardOfficerOptions>;

const EboardOfficerSchema = new Schema<EboardOfficerOptions, EboardOfficerModel>({
  email: { type: String, required: true },
  facebook: { type: String, required: true },
  gradYear: { type: Number, required: true },
  instagram: { type: String, required: true },
  linkedin: { type: String, required: true },
  major: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  pledgeClass: { type: String, required: true },
  position: { type: String, required: true },
  rank: { type: Number, required: true },
},
  { collection: 'eboard' });

export const EboardOfficer = mongoose.models.EboardOfficer || model<EboardOfficerOptions, EboardOfficerModel>(
  'EboardOfficer',
  EboardOfficerSchema,
);
