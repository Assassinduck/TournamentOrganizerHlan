

type specialGames = "CS:GO" | "Fortnite" | "Minecraft" | "Roblox"
type TournamentFormatBase = {
  singleElimination: "single-elimination",
  doubleElimination: "double-elimination",
  roundRobin: "round-robin",
  league: "league"
}



type TournamentFormat =
  | SingleEliminationFormat
  | DoubleEliminationFormat
  | RoundRobinFormat
  | LeagueFormat;

interface SingleEliminationFormat{
  type: "single-elimination"
  bracketSize: number;
  seedingMethod: 'random' | 'manual';
//   hasThirdPlacePlayoff: boolean;
//   byesHandling: 'automatic' | 'none';
  matchRules: {
    format: 'bestOfOne' | 'bestOfThree' | 'bestOfFive';
    // tiebreaker: 'overtime' | 'shootout' | 'none';
  };
//   reSeeding: boolean;
  schedule: {
    startDate: Date[];
  };
//   wildcardEntries: number;
//   tiebreakCriteria: string[];
}

interface DoubleEliminationFormat {
  type: "double-elimination";
  seedingMethod: 'random' | 'manual';
  finalsMatchConfiguration: 'singleMatch' | 'potentialBracketReset';
  bracketResetInFinals: boolean;
//   matchLocationAssignment: 'predetermined' | 'higherSeedChoice' | 'neutral';
//   byesHandling: 'automatic' | 'none';
  matchRules: {
    format: 'bestOfOne' | 'bestOfThree' | 'bestOfFive';
    timeLimit?: number;
    tiebreaker: 'overtime' | 'shootout' | 'none';
  };
  schedule: {
    winnersBracketStartTime: Date[];
    losersBracketStartTime: Date[];
  };
}

interface RoundRobinFormat {
  type: "round-robin" ;
  numberOfRounds?: number; // Optional, number of rounds in the round-robin format
  // Other round-robin specific properties
}

interface LeagueFormat {
  type: "league" ;
  numberOfGames: number; // Number of games each team plays in the league
  // Other league specific properties
}

type Team = {
  teamId: string;
  teamName: string;
  teamCaptain: string;
  players: string[];
};



type Match = {
  matchId: string;
  teams: Team[];
  startTime: Date;
  endTime: Date| undefined;
  winner: Team;
  score: {
    team1: number;
    team2: number;
  };
  status: "scheduled" | "ongoing" | "finished";
};


type Round = {
  roundId: string;
  roundNumber: number;
  matches: Match[];
  startTime: Date;
  endTime: Date | undefined;
  isFinished: boolean;
  nextRound: Round | undefined;
  previousRound: Round | undefined;
};


const tour = [
  {

  }
]

const la: TournamentFormat = {
  type: "single-elimination",
  bracketSize: 16,
  schedule: {
    startDate: [new Date()]
  },
  seedingMethod: 'manual',
  matchRules: {
    format: 'bestOfOne'
  }
}

const lb: TournamentFormat = {
  type: "double-elimination",
  seedingMethod: 'manual',
  finalsMatchConfiguration: 'singleMatch',
  bracketResetInFinals: true,
  matchRules: {
    format: 'bestOfOne',
    tiebreaker: 'overtime'
  },
  schedule: {
    winnersBracketStartTime: [new Date()],
    losersBracketStartTime: [new Date()]
  }
}


interface Tournament {
    tournamentId: string;
    gameName: string;
    currentRound: number;
    tournementType: TournamentFormatBase
    
}


const tA: Tournament = {
    gameName: "CSGO",
    tournamentId: "hdhdjhwadw",
    tournementType: 
    
}