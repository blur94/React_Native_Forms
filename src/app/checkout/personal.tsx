import { StyleSheet, View } from "react-native";
import { PrimaryButton } from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalDetails, PersonalDetailsSchema } from "../../schema";

export default function PersonalDetailsForm() {
  const OnNext: SubmitHandler<PersonalDetails> = (data) => {
    // validate from
    console.log(data);

    // route to next page
    router.push("/checkout/payment");
  };

  const form = useForm<PersonalDetails>({
    resolver: zodResolver(PersonalDetailsSchema),
  });

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="fullName"
          placeholder="Full Name"
          label="Full Name"
          autoComplete="family-name"
        />

        <CustomTextInput name="address" placeholder="Address" label="Address" />

        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="city"
            placeholder="City"
            label="City"
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name="postCode"
            placeholder="Post Code"
            label="Post Code"
            containerStyle={{ flex: 1 }}
          />
        </View>
        <CustomTextInput
          name="phoneNumber"
          placeholder="876545676555"
          label="Phone Number"
          inputMode="tel"
        />

        <PrimaryButton
          title="Next"
          style={styles.button}
          onPress={form.handleSubmit(OnNext)}
        />
      </FormProvider>
    </KeyboardAwareScrollView>
  );
}

export const styles = StyleSheet.create({
  container: { backgroundColor: "white", flexGrow: 1, padding: 10, gap: 5 },
  button: { marginTop: "auto" },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 5,
  },
});
