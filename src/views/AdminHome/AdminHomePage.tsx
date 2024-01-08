import React from "react"
import { AdminHome } from "."
import { CenteredLayout } from "../../layout/CenteredLayout"

export interface AdminHomePageProps {

}

const AdminHomePageComponent = () => {

    return (
        <>
            <CenteredLayout>
                <AdminHome />
            </CenteredLayout>
        </>
    )
}

export const AdminHomePage = React.memo(AdminHomePageComponent)