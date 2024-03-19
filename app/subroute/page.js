'use client'

import { signIn, signOut, useSession } from "next-auth/react"

export default function Page() {
  // const session = await getServerSession(authOptions)
  const { data: session, status } = useSession()

  console.log(`session`, session)

  if (status === "loading") return <p>Loading...</p>

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Page</h1>
      {
        session? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )
      }
      {JSON.stringify(session, null, 2)}
    </main>
  );
}
