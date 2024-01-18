import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotFoundRoute, RouterProvider, Router } from '@tanstack/react-router'
import { Route } from './routes/__root.tsx'
import { routeTree } from './routeTree.gen'

declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}



export type MainPageTabs = "Ongoing" | "Upcoming" | "Completed"



const notFoundRoute = new NotFoundRoute({ getParentRoute: () => Route, component: () => <div>404</div> })


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


