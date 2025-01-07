import { Text, View, StyleSheet } from "react-native";
import { PrimaryButton } from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

export default function ConfirmDetailsForm() {
  const OnNext = () => {
    // validate from

    // route to next page
    router.dismissAll();
    router.back();
  };
  return (
    <KeyboardAwareScrollView>
      <Text>Confirm Form Submission</Text>

      <PrimaryButton title="Submit" style={styles.button} onPress={OnNext} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1, padding: 10 },
  button: { marginTop: "auto", marginBottom: 25 },
});
