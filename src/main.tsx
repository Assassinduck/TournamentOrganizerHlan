import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import GlobalStyles from './styles/Global.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotFoundRoute, Outlet, Route, Router, RouterProvider, rootRouteWithContext } from '@tanstack/react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { HomePage } from './views/AdminHome/HomePage.tsx'


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
      <GlobalStyles />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />

    </>
  ),
})


export type MainPageTabs = "Ongoing" | "Upcoming" | "Completed"

const Home = new Route({ getParentRoute: () => rootRoute, path: '/', component: () => <HomePage /> })

const newTournamentRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'tournament/new',
  component: () => <div>New Tournament</div>,
})
const notFoundRoute = new NotFoundRoute({ getParentRoute: () => rootRoute, component: () => <div>404</div> })

const routeTree = rootRoute.addChildren([Home])

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  </React.StrictMode>,
)


