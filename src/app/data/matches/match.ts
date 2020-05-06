import { ITeam } from '../team/team';

export interface IMatch {
  id : string;
  date: Date;
  teamAwayId: string;
  teamHostId: string;
  teamAway: ITeam;
  teamHost: ITeam;
  }
  