import { QueryClient } from "@tanstack/react-query"
import { rootRouteWithContext, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = rootRouteWithContext<{
    queryClient: QueryClient
}>()({
    component: () => (
        <>
            <Outlet />
            <TanStackRouterDevtools position="bottom-right" />

        </>
    ),
})

