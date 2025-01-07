import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../../components/CustomButton";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

export default function PaymentDetailsForm() {
  const OnNext = () => {
    // validate from

    // route to next page
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <Text>Payment Details</Text>

      <PrimaryButton title="Next" style={styles.button} onPress={OnNext} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1, padding: 10 },
  button: { marginTop: "auto", marginBottom: 25 },
});
