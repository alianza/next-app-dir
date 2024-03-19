export { default } from "next-auth/middleware"

export const config = { matcher: ["/auth-only-page"] } // Must be authenticated to access these pages
