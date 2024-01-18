import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

type book = {
    name: string;
    publisher: string;
    releaseYear: number;
    available: boolean;
};

export const useTest = (): UseQueryResult<book[]> => {
    return useQuery({
        queryKey: ["test"],
        queryFn: () => {
            return axios("http://localhost:3000/books").then((res) => {
                const innerArray = res.data[0];
                console.log(innerArray);
                return innerArray;
            });
        },
    });
};
