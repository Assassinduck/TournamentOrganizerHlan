import React from "react"

export interface NewTournamentProps {

}

const NewTournamentComponent = (props: NewTournamentProps) => {
    return (
        <div>
            New Tournament
        </div>
    )
}

export const NewTournament = React.memo(NewTournamentComponent)