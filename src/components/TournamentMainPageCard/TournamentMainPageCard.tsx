import { Tournament } from "@/tournamentTypes/tournament"
import React from "react"

export interface TournamentMainPageCardProps {
    tournament: Tournament
}

const TournamentMainPageCardComponent = ({ tournament }: TournamentMainPageCardProps) => {



    return (
        <div>
            <div key={tournament.tournamentId} className="flex flex-row bg-blue-300 rounded-lg shadow-lg gap-4 ">
                <div className="m-4">
                    <p>{tournament.teams[0].teamName} vs {tournament.teams[1].teamName} {tournament.gameName} {tournament.tournamentStatus}</p>
                </div>
            </div>
        </div>
    )
}

export const TournamentMainPageCard = React.memo(TournamentMainPageCardComponent)