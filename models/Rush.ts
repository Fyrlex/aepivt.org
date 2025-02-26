export interface RushEventOptions {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

export interface RushOptions {
  status: 'Open' | 'Informal' | 'Closed';
  interestUrl: string;
  events: RushEventOptions[];
}
