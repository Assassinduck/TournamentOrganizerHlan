import { Outlet } from "@tanstack/react-router"
import React from "react"
import tw from "twin.macro"

export interface CenteredLayoutProps {
  children?: React.ReactNode
  className?: string
}
const Container =  tw.div`flex justify-center px-0 w-full `

const CenteredLayoutComponent = ({ children = <Outlet />, className }: CenteredLayoutProps) => {
  return <Container css={tw`${className ??""}` }>{children}</Container>
}
export const CenteredLayout = React.memo(CenteredLayoutComponent)