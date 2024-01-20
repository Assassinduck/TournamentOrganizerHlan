export const tournamentKeys = {
    tournaments: ["tournaments"],
    tournamentById: (id: string) => [...tournamentKeys.tournaments, id] as const,
};
