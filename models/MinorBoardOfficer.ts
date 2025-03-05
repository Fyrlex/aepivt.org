import mongoose, { HydratedDocument, Model, Schema, model } from 'mongoose';

export enum MinorBoardOfficerRank {
  AcademicsChair = 1,
  AlumniChair,
  AthleticsChair,
  CommunityServiceChair,
  DiversityEquityAndInclusionChair,
  FormalsChair,
  HousingChair,
  ChabadLiason,
  HillelLiaison,
  JewishStudentUnionLiason,
  LogisticsChair,
  MarketingAndMerchandiseChair,
  PublicDomainChair,
  SeniorsChair,
  StandardsOfExcellenceChair,
  SweetheartChair,
  UniversityRelationsChair
}

export interface MinorBoardOfficerOptions {
  name: string;
  rank: MinorBoardOfficerRank;
  position: string;
  gradYear: string;
}

export type MinorBoardOfficerDocument = HydratedDocument<MinorBoardOfficerOptions>;

export type MinorBoardOfficerModel = Model<MinorBoardOfficerOptions>;

const MinorBoardOfficerSchema = new Schema<MinorBoardOfficerOptions, MinorBoardOfficerModel>({
  gradYear: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  rank: { type: Number, required: true },
}, {
  collection: 'minorboard'
});

export const MinorBoardOfficer = mongoose.models.MinorBoardOfficer || model<MinorBoardOfficerOptions, MinorBoardOfficerModel>(
  'MinorBoardOfficer',
  MinorBoardOfficerSchema,
);
