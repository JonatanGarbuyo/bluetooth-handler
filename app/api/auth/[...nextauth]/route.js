import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // allowDangerousEmailAccountLinking: true,

      // Google only provides Refresh Token to an application the first time a user signs in.
      // To force Google to re-issue a Refresh Token, the user needs to remove the application
      // from their account and sign in again: https://myaccount.google.com/permissions
      // Alternatively, you can also pass options in the params object of authorization which
      // will force the Refresh Token to always be provided on sign in, however this will ask
      // all users to confirm if they wish to grant your application access every time they sign in.
      // If you need access to the RefreshToken or AccessToken for a Google account and you
      // are not using a database to persist user accounts, this may be something you need to do.
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  profile(profile) {
    console.log('Profile: ', profile)
    return {
      id: profile.id,
      // name: profile.kakao_account?.profile.nickname,
      // email: profile.kakao_account?.email,
      // image: profile.kakao_account?.profile.profile_image_url,
    }
  },
  /** Callbacks are asynchronous functions you can use to control what happens when an action is performed.
   * Callbacks are extremely powerful, especially in scenarios involving JSON Web Tokens as they allow you
   * to implement access controls without a database and to integrate with external databases or APIs.
   * You can specify a handler for any of the callbacks below.
   **/
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('CB-signIn: ', { user, account, profile, email, credentials })
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log('CB-redirect: ', { url, baseUrl })
      return baseUrl
    },
    async session({ session, token, user }) {
      console.log('CB-session: ', { session, token, user })

      // Send properties to the client, like an access_token from a provider
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('CB-jwt: ', { token, user, account, profile, isNewUser })

      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
      }
      return token
    },
  },
})

export { handler as GET, handler as POST }
