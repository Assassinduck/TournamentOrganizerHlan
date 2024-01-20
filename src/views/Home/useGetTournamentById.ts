import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { tournamentKeys } from "./tournamentKeys";
import axios from "axios";
import { Tournament } from "@/tournamentTypes/tournament";

interface GetTournamentByIdType {
    id: string;
}

export const useGetTournamentById = ({
    id,
}: GetTournamentByIdType): UseQueryResult<Tournament> => {
    return useQuery({
        queryKey: tournamentKeys.tournamentById(id),
        queryFn: () => {
            return axios<Tournament>(
                `http://localhost:3000/tournament/${id}`
            ).then((res) => {
                return res.data ?? {};
            });
        },
    });
};
