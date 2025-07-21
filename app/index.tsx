import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My First React Native Expo App</Text>

      <Pressable
        style={[styles.button, styles.fbButton]}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.fbButton]}
        onPress={() => router.push("/signup")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#333333",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  button: {
    backgroundColor: "#3b5998",
    paddingVertical: 12,
    borderRadius: 6,
    width: 200,             
    alignItems: "center",  
  },
  fbButton: {
    backgroundColor: "#9400D3",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

