import { Stack } from "expo-router";
import CheckoutFormStepIndicator from "../../components/CheckoutFormStepIndicator";
import { View } from "react-native";
import { Fragment } from "react";

export default function CheckoutLayout() {
  return (
    <Fragment>
      <CheckoutFormStepIndicator />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="personal" options={{ title: "Personal" }} />
        <Stack.Screen name="payment" options={{ title: "Payment" }} />
        <Stack.Screen name="confirm" options={{ title: "Confirm" }} />
      </Stack>
    </Fragment>
  );
}
