import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../components/CustomButton";

export default function Page() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Home" }} />
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>

        <Link href="/checkout" asChild>
          <PrimaryButton title="Checkout" />
        </Link>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 26,
    textAlign: "center",
    color: "#38434D",
  },
});
