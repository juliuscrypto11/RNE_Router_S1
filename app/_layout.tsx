import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#212337',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerTitle: "Log-in",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerTitle: "Sign-Up",
        }}
      />
    </Stack>
  );
}
