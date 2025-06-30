import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue',
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
        name="login"
        options={{
          headerTitle: "Log-in Form",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerTitle: "Sign-up",
        }}
      />
    </Stack>
  );
}
