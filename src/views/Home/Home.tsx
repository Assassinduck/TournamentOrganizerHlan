import React, { useRef, ElementRef, useMemo, useEffect } from "react"
import { Tournament, TournamentList, tournament1, tournamentList } from "@/tournamentTypes/tournament"
import { TournamentMainPageCard } from "@/components/TournamentMainPageCard/TournamentMainPageCard"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "@tanstack/react-router"
import { useGetAllTournaments } from "@/views/Home/useGetAllTournaments"



type TournamentListProps = {
    tournamentsInCategory: TournamentList
}

type sortedTournamentLists = {
    shedueldTournamentList: TournamentList
    ongoingTournamentList: TournamentList
    finishedTournamentList: TournamentList

}

const TournamentCardList = ({ tournamentsInCategory }: TournamentListProps) => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                {tournamentsInCategory.tournaments.map((tournament) => {
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

    const { data } = useGetAllTournaments()
    const navigate = useNavigate()


    const findAndSortTournaments = useMemo(() => {
        return (tournamentsList: TournamentList): sortedTournamentLists => {

            const clonedTournamentsForSchedueld = structuredClone(tournamentsList)
            const clonedTournamentsForOngoing = structuredClone(tournamentsList)
            const clonedTournamentsForCompleted = structuredClone(tournamentsList)

            const shedueldTournamentList = clonedTournamentsForSchedueld.tournaments.filter((tournament) => {
                return tournament.tournamentStatus === "scheduled"
            })
            const ongoingTournamentList = clonedTournamentsForOngoing.tournaments.filter((tournament) => {
                return tournament.tournamentStatus === "ongoing"
            })
            const finishedTournamentList = clonedTournamentsForCompleted.tournaments.filter((tournament) => {
                return tournament.tournamentStatus === "finished"
            })
            return {
                shedueldTournamentList: { tournaments: shedueldTournamentList } satisfies TournamentList,
                ongoingTournamentList: { tournaments: ongoingTournamentList } satisfies TournamentList,
                finishedTournamentList: { tournaments: finishedTournamentList } satisfies TournamentList
            } satisfies sortedTournamentLists
        }
    }, [data?.tournaments])



    const findSchedueldTournaments = useMemo(() => {
        return (tournamentsList: TournamentList) => {
            const shedueldTournamentList = tournamentsList.tournaments.filter((tournament) => {
                return tournament.tournamentStatus === "scheduled"
            })
            return { tournaments: shedueldTournamentList } satisfies TournamentList
        }
    }, [data?.tournaments])


    const findOngoingTournaments = useMemo(() => {
        return (tournamentsList: TournamentList) => {
            const ongoingTournamentList = tournamentsList.tournaments.filter((tournament) => {
                return tournament.tournamentStatus === "ongoing"
            })
            return { tournaments: ongoingTournamentList } satisfies TournamentList
        }
    }, [data?.tournaments])


    const findFinishedTournaments = useMemo(() => {
        return (tournamentsList: TournamentList) => {
            const completedTournamentList = tournamentsList.tournaments.filter((tournament) => {
                return tournament.tournamentStatus === "finished"
            })
            return { tournaments: completedTournamentList } satisfies TournamentList
        }
    }, [data?.tournaments])


    const SortedTourmentLists = findAndSortTournaments(data ?? { tournaments: [] })

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
                    {data?.tournaments && <TournamentCardList tournamentsInCategory={SortedTourmentLists.ongoingTournamentList} />}
                </TabsContent>
                <TabsContent value="scheduled">
                    {data?.tournaments && <TournamentCardList tournamentsInCategory={SortedTourmentLists.shedueldTournamentList} />}
                </TabsContent>
                <TabsContent value="finished">
                    {data?.tournaments && <TournamentCardList tournamentsInCategory={SortedTourmentLists.finishedTournamentList} />}
                </TabsContent>
            </Tabs>

        </div>
    )
}

export const Home = React.memo(HomeComponent)