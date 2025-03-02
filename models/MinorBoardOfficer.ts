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
