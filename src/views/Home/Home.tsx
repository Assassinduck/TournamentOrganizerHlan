import React, { useRef, ElementRef } from "react"
import { useTest } from "./test"
import { TournamentList, tournament1, tournamentList } from "@/tournamentTypes/tournament"
import { TournamentMainPageCard } from "@/components/TournamentMainPageCard/TournamentMainPageCard"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "@tanstack/react-router"


interface TournamentListProps {
    tournamentList: TournamentList
}

const TournamentListComponent = ({ tournaments }: TournamentList) => {
    return (
        <div>
            <div className="flex flex-col">
                {tournaments.map((tournament) => {
                    return (
                        <TournamentMainPageCard key={tournament.tournamentId} tournament={tournament} />
                    )
                })}
            </div>
        </div>
    )

}

type sortTournaments = {
    scheduledTournaments: TournamentList
    ongoingTournaments: TournamentList
    finishedTournaments: TournamentList

}

const HomeComponent = () => {
    console.log("AdminHomeComponent")

    const { data } = useTest()
    const navigate = useNavigate()

    const SortTournaments = (tournamentList: TournamentList) => {

        const shedueldTournamentListClone = structuredClone(tournamentList)
        const ongoingTournamentListClone = structuredClone(tournamentList)
        const completedTournamentListClone = structuredClone(tournamentList)

        const scheduledTournaments = shedueldTournamentListClone.tournaments.filter((tournament) => tournament.tournamentStatus === "scheduled")
        const ongoingTournaments = ongoingTournamentListClone.tournaments.filter((tournament) => tournament.tournamentStatus === "ongoing")
        const finishedTournaments = completedTournamentListClone.tournaments.filter((tournament) => tournament.tournamentStatus === "finished")

        const sortedTournaments: sortTournaments = {
            scheduledTournaments: { tournaments: scheduledTournaments } satisfies TournamentList,
            ongoingTournaments: { tournaments: ongoingTournaments } satisfies TournamentList,
            finishedTournaments: { tournaments: finishedTournaments } satisfies TournamentList
        }
        return sortedTournaments

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
                    <TabsTrigger value="finished"> Finished </TabsTrigger>
                </TabsList>

                <Button asChild>
                    <Link to="/newtournament">New Tournament</Link>
                </Button>

                <TabsContent value="ongoing">
                    {data && <TournamentListComponent tournaments={SortTournaments(data).ongoingTournaments.tournaments} />}
                </TabsContent>
                <TabsContent value="scheduled">
                    {data && <TournamentListComponent tournaments={SortTournaments(data).scheduledTournaments.tournaments} />}
                </TabsContent>
                <TabsContent value="finished">
                    {data && <TournamentListComponent tournaments={SortTournaments(data).finishedTournaments.tournaments} />}
                </TabsContent>
            </Tabs>

        </div>
    )
}

export const Home = React.memo(HomeComponent)