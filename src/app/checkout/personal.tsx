import { StyleSheet, View } from "react-native";
import { PrimaryButton } from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalDetails, PersonalDetailsSchema } from "../../schema";
import Checkout from "../../store/checkout";
import RNPickerSelect from "react-native-picker-select";
import countries from "../../../assets/countries.json";
import CustomPicker from "../../components/CustomPicker";

export default function PersonalDetailsForm() {
  const { setPersonalInfo, personalInfo } = Checkout();
  const OnNext: SubmitHandler<PersonalDetails> = (data) => {
    // validate from
    setPersonalInfo(data);

    // route to next page
    router.push("/checkout/payment");
  };

  const form = useForm<PersonalDetails>({
    resolver: zodResolver(PersonalDetailsSchema),
    defaultValues: personalInfo,
  });

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="fullName"
          placeholder="Full Name"
          label="Full Name"
          autoComplete="name"
        />

        <CustomTextInput
          name="address"
          placeholder="Address"
          label="Address"
          autoComplete="address-line1"
        />

        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="city"
            placeholder="City"
            label="City"
            containerStyle={{ flex: 1 }}
            autoComplete="address-line2"
          />
          <CustomTextInput
            name="postCode"
            placeholder="Post Code"
            label="Post Code"
            containerStyle={{ flex: 1 }}
            autoComplete="postal-code"
          />
        </View>

        <CustomPicker
          name="country"
          items={countries.map((c) => ({ label: c.name, value: c.code }))}
          placeholder={{ label: "Select Country" }}
          useNativeAndroidPickerStyle={false}
        />

        <CustomTextInput
          name="phoneNumber"
          placeholder="876545676555"
          label="Phone Number"
          inputMode="tel"
          autoComplete="tel"
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
