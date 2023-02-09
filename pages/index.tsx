import { Button, Heading, Text, useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";

export default function Home() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  // use next router to redirect to new workout page
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-8">
      <Heading level={1}>Welcome!</Heading>
      <Text variation="secondary">
        You are signed in as {user?.attributes?.email}
      </Text>
      <Button variation="primary" onClick={() => router.push("/new-workout")}>
        New Workout
      </Button>
      <Button onClick={signOut} className="w-fit">
        Sign Out
      </Button>
    </div>
  );
}
