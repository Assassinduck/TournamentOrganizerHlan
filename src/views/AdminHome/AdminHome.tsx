import React, { useRef, ElementRef } from "react"


const AdminHomeComponent = () => {
    console.log("AdminHomeComponent")

    const ref = useRef<ElementRef<"div">>(null)
    return (
        <div ref={ref}>
            AdminHome
        </div>
    )
}

export const AdminHome = React.memo(AdminHomeComponent)