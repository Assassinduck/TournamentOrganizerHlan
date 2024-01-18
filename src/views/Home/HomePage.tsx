import React from "react"
import { CenteredLayout } from "../../layout/CenteredLayout"
import { Home } from "./Home"

export interface HomePageProps {

}

const HomePageComponent = () => {

    return (
        <>
            <CenteredLayout>
                <Home />
            </CenteredLayout>
        </>
    )
}

export const HomePage = React.memo(HomePageComponent)