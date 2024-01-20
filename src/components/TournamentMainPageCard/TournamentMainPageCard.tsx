import { Tournament } from "@/tournamentTypes/tournament"
import React from "react"
import { Button } from "../ui/button"
import { useGetTournamentById } from "@/views/Home/useGetTournamentById"

export interface TournamentMainPageCardProps {
    tournament: Tournament
}

const TournamentMainPageCardComponent = ({ tournament }: TournamentMainPageCardProps) => {

    const { data } = useGetTournamentById({ id: tournament.tournamentId })


    const handleTournamentClick = () => {
        console.log("handleTournamentClick")
        if (data) {
            console.log("data", data.tournamentFormat)
        }
    }

    return (

        <Button key={tournament.tournamentId} onClick={handleTournamentClick} className="flex flex-row bg-blue-300  pt-8 pb-8 min-w-full shadow-lg gap-4 ">
            <div className="m-4">
                <p>{tournament.teams[0].teamName} vs {tournament.teams[1].teamName} {tournament.gameName} {tournament.tournamentStatus} {tournament.currentRound} </p>
            </div>
        </Button>

    )
}

export const TournamentMainPageCard = React.memo(TournamentMainPageCardComponent)