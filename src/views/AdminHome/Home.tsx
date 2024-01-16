import React, { useRef, ElementRef } from "react"
import { useTest } from "./test"
import tw from "twin.macro"

const textStyle = tw`bg-red d`
const HomeComponent = () => {
    console.log("AdminHomeComponent")

    const { data } = useTest()
    const MainPageContainer = tw.div`flex flex-col w-full h-full `

    const Text = tw.p`text-red-500 text`


    return (
        <div >
            <p>dwdwadwa</p>
        </div>
    )
}

export const Home = React.memo(HomeComponent)