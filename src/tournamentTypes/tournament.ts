type specialGames = "CS:GO" | "Fortnite" | "Minecraft" | "Roblox";

type TournamentFormat =
    | SingleEliminationFormat
    | DoubleEliminationFormat
    | RoundRobinFormat
    | LeagueFormat;

interface SingleEliminationFormat {
    type: "single-elimination";
    bracketSize: number;
    seedingMethod: "random" | "manual";
    //   hasThirdPlacePlayoff: boolean;
    //   byesHandling: 'automatic' | 'none';
    matchRules: {
        format: "bestOfOne" | "bestOfThree" | "bestOfFive";
        timeLimit?: number;

        tiebreaker?: "overtime" | "shootout" | "none";
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
    seedingMethod: "random" | "manual";
    finalsMatchConfiguration: "singleMatch" | "potentialBracketReset";
    bracketResetInFinals: boolean;
    //   matchLocationAssignment: 'predetermined' | 'higherSeedChoice' | 'neutral';
    //   byesHandling: 'automatic' | 'none';
    matchRules: {
        format: "bestOfOne" | "bestOfThree" | "bestOfFive";
        timeLimit?: number;
        tiebreaker: "overtime" | "shootout" | "none";
    };
    schedule: {
        winnersBracketStartTime: Date[];
        losersBracketStartTime: Date[];
    };
}

interface RoundRobinFormat {
    type: "round-robin";
    numberOfRounds?: number; // Optional, number of rounds in the round-robin format
    // Other round-robin specific properties
}

interface LeagueFormat {
    type: "league";
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
    endTime: Date | undefined;
    winner: Team | undefined;
    score: {
        team1: number;
        team2: number;
    };
    status: "scheduled" | "ongoing" | "finished";
    isFinished: boolean;
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

export interface Tournament {
    tournamentId: string;
    gameName: string;
    tournamentStatus: "scheduled" | "ongoing" | "finished";
    currentRound: number;
    tournamentFormat: TournamentFormat;
    teams: Team[];
    tournament: Round[];
}

export interface TournamentList {
    tournaments: Tournament[];
}

const teamA: Team = {
    teamId: "123",
    teamName: "Team A",
    teamCaptain: "John Doe",
    players: ["John Doe", "Jane Doe"],
};

const teamB: Team = {
    teamId: "3218888",
    teamName: "Team B",
    teamCaptain: "Jane Doe",
    players: ["Doe Doe", "Jane Joe"],
};

const teamC: Team = {
    teamId: "213321",
    teamName: "Team C",
    teamCaptain: "aaaaa Doe",
    players: ["aaaaaa Doe", "vvvvvv Joe"],
};

const teamD: Team = {
    teamId: "123123",
    teamName: "Team D",
    teamCaptain: "jonas janne",
    players: ["jonas janne", "lol assss"],
};

const teamE: Team = {
    teamId: "32134",
    teamName: "Team E",
    teamCaptain: "garr støre",
    players: ["garr støre", "awww bruh"],
};

const teamF: Team = {
    teamId: "32134",
    teamName: "Team E",
    teamCaptain: "erna eple",
    players: ["erna eple", "kato mahboi"],
};

const match1: Match = {
    matchId: "123",
    teams: [teamA, teamB],
    startTime: new Date(),
    endTime: undefined,
    winner: undefined,
    score: {
        team1: 0,
        team2: 0,
    },
    status: "scheduled",
    isFinished: false,
};

const match2: Match = {
    matchId: "234",
    teams: [teamC, teamD],
    startTime: new Date(),
    endTime: undefined,
    winner: undefined,
    score: {
        team1: 0,
        team2: 0,
    },
    status: "scheduled",
    isFinished: false,
};

const match3: Match = {
    matchId: "345",
    teams: [teamE, teamF],
    startTime: new Date(),
    endTime: undefined,
    winner: undefined,
    score: {
        team1: 0,
        team2: 0,
    },
    status: "scheduled",
    isFinished: false,
};

const Round1: Round = {
    roundId: "123",
    roundNumber: 1,
    matches: [match1, match2, match3],
    startTime: new Date(),
    endTime: undefined,
    isFinished: false,
    nextRound: undefined,
    previousRound: undefined,
};

export const tournament1: Tournament = {
    gameName: "CSGO",
    tournamentStatus: "scheduled",
    tournamentId: "hdhdjhwadw",
    tournamentFormat: {
        type: "single-elimination",
        bracketSize: 6,
        seedingMethod: "manual",
        matchRules: {
            format: "bestOfOne",
        },
        schedule: {
            startDate: [new Date()],
        },
    },
    currentRound: 0,
    teams: [teamA, teamB, teamC, teamD, teamE, teamF],
    tournament: [Round1],
};

export const tournament2: Tournament = {
    gameName: "CSGO",
    tournamentStatus: "finished",
    tournamentId: "hdhdjhwadw",
    tournamentFormat: {
        type: "single-elimination",
        bracketSize: 6,
        seedingMethod: "manual",
        matchRules: {
            format: "bestOfOne",
        },
        schedule: {
            startDate: [new Date()],
        },
    },
    currentRound: 0,
    teams: [teamA, teamB, teamC, teamD, teamE, teamF],
    tournament: [Round1],
};
export const tournament3: Tournament = {
    gameName: "CSGO",
    tournamentStatus: "ongoing",
    tournamentId: "hdhdjhwadw",
    tournamentFormat: {
        type: "single-elimination",
        bracketSize: 6,
        seedingMethod: "manual",
        matchRules: {
            format: "bestOfOne",
        },
        schedule: {
            startDate: [new Date()],
        },
    },
    currentRound: 0,
    teams: [teamA, teamB, teamC, teamD, teamE, teamF],
    tournament: [Round1],
};
export const tournament4: Tournament = {
    gameName: "CSGO",
    tournamentStatus: "scheduled",
    tournamentId: "hdhdjhwadw",
    tournamentFormat: {
        type: "single-elimination",
        bracketSize: 6,
        seedingMethod: "manual",
        matchRules: {
            format: "bestOfOne",
        },
        schedule: {
            startDate: [new Date()],
        },
    },
    currentRound: 0,
    teams: [teamA, teamB, teamC, teamD, teamE, teamF],
    tournament: [Round1],
};

export const tournamentList: TournamentList = {
    tournaments: [tournament1, tournament2, tournament3, tournament4],
};
