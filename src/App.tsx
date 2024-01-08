
import './App.css'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { NotFoundRoute, Outlet, Route, Router, RouterProvider, redirect, rootRouteWithContext } from '@tanstack/react-router'
import { About } from './views/About'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AdminHomePage } from './views/AdminHome/AdminHomePage'
import { PlayerHomePage } from './views/PlayerHome/PlayerHomePage'
//@ts-expect-errors-expect
import React from 'react'

declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}


const rootRoute = rootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})


export type MainPageTabs = "Ongoing" | "Upcoming" | "Completed"


const isAdmin = true

const AdminIndexRoute = new Route({
  getParentRoute: () => rootRoute, path: '/',
  beforeLoad: () => {
    if (!isAdmin) {
      throw redirect({
        to: 'player',
      })
    }
  },
  component: AdminHomePage,
  meta: { title: 'Admin' },
})


const PlayerIndexRoute = new Route({ getParentRoute: () => rootRoute, path: "player", meta: { title: 'Player', }, component: PlayerHomePage })

const aboutRoute = new Route({ getParentRoute: () => rootRoute, path: 'about', component: About, meta: { title: 'About' } })
const notFoundRoute = new NotFoundRoute({ getParentRoute: () => rootRoute, component: () => <div>404</div>, meta: { title: '404' } })

const newTournamentRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'tournament/new',
  component: () => <div>New Tournament</div>,
  meta: { title: 'New Tournament' }
})






const routeTree = rootRoute.addChildren([AdminIndexRoute, PlayerIndexRoute, aboutRoute])
const queryClient = new QueryClient()

const router = new Router({
  caseSensitive: false,
  routeTree,
  notFoundRoute: notFoundRoute,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  context: {
    queryClient,
  },
})


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}
export default App
