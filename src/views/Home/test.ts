import { TournamentList, tournamentList } from "@/tournamentTypes/tournament";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

type book = {
    name: string;
    publisher: string;
    releaseYear: number;
    available: boolean;
};

export const useTest = (): UseQueryResult<TournamentList> => {
    return useQuery({
        queryKey: ["test"],
        queryFn: () => {
            return tournamentList
        },
    });
};
