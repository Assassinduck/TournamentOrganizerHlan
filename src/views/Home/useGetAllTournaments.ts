import { TournamentList, tournamentList } from "@/tournamentTypes/tournament";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

type book = {
    name: string;
    publisher: string;
    releaseYear: number;
    available: boolean;
};

const tournamentKeys = {
    tournaments: ["tournaments"],
    tournamentById: (id: string) => [...tournamentKeys.tournaments, id],
};

export const useGetAllTournaments = (): UseQueryResult<TournamentList> => {
    return useQuery({
        queryKey: tournamentKeys["tournaments"],
        queryFn: () => {
            return axios("http://localhost:3000/tournaments").then((res) => {
                return res.data ?? [];
            });
        },
    });
};

/**
 * useQuery({
        queryKey: ["test"],
        queryFn: () => {
            return axios("http://localhost:3000/books").then((res) => {
                const innerArray = res.data[0];
                console.log(innerArray);
                return innerArray;
            });
        },
    });
 */
