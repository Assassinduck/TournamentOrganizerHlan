import React from "react"
import { NewTournament } from "./NewTournament"

export interface NewTournamentPageProps {
    
}

const NewTournamentPageComponent = (props: NewTournamentPageProps) => {
    return (
        <div>
            <NewTournament/>
        </div>
    )
}

export const NewTournamentPage = React.memo(NewTournamentPageComponent)