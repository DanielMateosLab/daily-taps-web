import { Authenticator, Button, Heading, Text } from "@aws-amplify/ui-react"

export default function Home() {
  return (
    <div>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="flex flex-col items-center justify-center gap-4 pt-8">
            <Heading level={1}>Welcome!</Heading>
            <Text variation="secondary">
              You are signed in as {user?.attributes?.email}
            </Text>
            <Button onClick={signOut} className="w-fit">
              Sign Out
            </Button>
          </div>
        )}
      </Authenticator>
    </div>
  )
}
