import React from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { tournamentSchema } from "../../../../../common/schema"
import { zodResolver } from "@hookform/resolvers/zod"

export interface CSGOFormProps {

}



const CSGOFormComponent = (props: CSGOFormProps) => {

    const form = useForm<z.infer<typeof tournamentSchema>>({
        resolver: zodResolver(tournamentSchema),
        defaultValues: {
            
        },
    })

    return (
        <div>

        </div>
    )
}

export const CSGOForm = React.memo(CSGOFormComponent)