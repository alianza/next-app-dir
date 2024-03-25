"use client";

import { SessionProvider } from "next-auth/react"

export default ({ children, session }) => <SessionProvider session={session}>{children}</SessionProvider>
