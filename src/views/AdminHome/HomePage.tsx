import React from "react"
import { Home } from "."
import { CenteredLayout } from "../../layout/CenteredLayout"

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