export interface TripTask {
  id: string;
  task: string;
  deadline: string;
  reward: string;
  completed: boolean;
}

export interface University {
  id: string;
  name: string;
  color: string;
  score: number;
  studentsTraveling: number;
}

export enum Vibe {
  PARTY = 'PARTY ANIMAL',
  CHILL = 'ZEN MASTER',
  ADVENTURE = 'ADRENALINE JUNKIE'
}

export interface SquadMember {
  id: string;
  name: string;
  vibe: Vibe;
  matchPercent: number;
  imageUrl: string;
}