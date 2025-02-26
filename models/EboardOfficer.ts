export enum EboardOfficerRank {
  Master = 1,
  LeitenantMaster,
  Scribe,
  Exchequer,
  Sentinel,
  BrotherAtLarge,
  SocialChair,
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
