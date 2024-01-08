import React from "react"

export interface AboutProps {

}

const AboutComponent = () => {
    return (
        <div>
            About
        </div>
    )
}

export const About = React.memo(AboutComponent)