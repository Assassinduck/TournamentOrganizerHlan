import React, { useRef, ElementRef } from "react"
import { useTest } from "./test"
import { tournament1, tournamentList } from "@/tournamentTypes/tournament"
import { TournamentMainPageCard } from "@/components/TournamentMainPageCard/TournamentMainPageCard"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "@tanstack/react-router"


const ScheduledTournamentList = () => {
    return (
        <div>
            <div className="flex flex-col">
                {tournamentList.tournaments.map((tournament) => {
                    return (
                        <TournamentMainPageCard key={tournament.tournamentId} tournament={tournament} />
                    )
                })}
            </div>
        </div>
    )

}

const HomeComponent = () => {
    console.log("AdminHomeComponent")

    const { data } = useTest()
    const navigate = useNavigate()
    const navigateToNewTournamentPage = () => {
        <Link to="/" />
    }

    return (
        <div className=" flex flex-col justify-center align-middle">
            <div className="mt-11 mb-11">
                <h1 className="text-center font-custom text-4xl">Tournament Organizer</h1>
            </div>
            <Tabs defaultValue="ongoing">
                <TabsList className="mr-8" >
                    <TabsTrigger value="ongoing" > Ongoing </TabsTrigger>
                    <TabsTrigger value="scheduled"> Scheduled </TabsTrigger>
                    <TabsTrigger value="completed"> Completed </TabsTrigger>
                </TabsList>

                <Button asChild>
                    <Link to="/newtournament">New Tournament</Link>
                </Button>

                <TabsContent value="ongoing">
                    hello
                </TabsContent>
                <TabsContent value="scheduled">
                    <ScheduledTournamentList />
                </TabsContent>
                <TabsContent value="completed">
                    bye
                </TabsContent>
            </Tabs>

        </div>
    )
}

export const Home = React.memo(HomeComponent)