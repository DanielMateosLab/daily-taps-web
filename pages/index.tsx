import {
  Button,
  Heading,
  Text,
  useAuthenticator,
  View,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { useRouter } from "next/router";
import awsExports from "../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

export default function Home() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  // use next router to redirect to new workout page
  const router = useRouter();

  return (
    <View className="flex flex-col items-center justify-center gap-4 pt-8">
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
    </View>
  );
}
