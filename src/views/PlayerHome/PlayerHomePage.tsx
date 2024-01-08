import React from "react"
import { PlayerHome } from "."
import { CenteredLayout } from "../../layout/CenteredLayout"

export interface PlayerHomePageProps {

}

const PlayerHomePageComponent = () => {
    return (
        <>
            <CenteredLayout>
                <PlayerHome />
            </CenteredLayout>
        </>
    )
}

export const PlayerHomePage = React.memo(PlayerHomePageComponent)