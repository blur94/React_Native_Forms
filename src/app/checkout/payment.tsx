import { router } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../../components/CustomButton";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { PaymentDetails, PaymentDetailsSchema } from "../../schema";
import CustomTextInput from "../../components/CustomTextInput";
import Checkout from "../../store/checkout";
import CustomCheckbox from "../../components/CustomCheckbox";
import CustomSwitch from "../../components/CustomSwitch";
import CustomDateTimePicker from "../../components/CustomDateTimePicker";

export default function PaymentDetailsForm() {
  const { setPaymentInfo, paymentInfo } = Checkout();
  const form = useForm<PaymentDetails>({
    resolver: zodResolver(PaymentDetailsSchema),
    defaultValues: {
      ...paymentInfo,
      cvv: Number(paymentInfo?.cvv) <= 0 ? "" : paymentInfo?.cvv,
    } as PaymentDetails,
  });
  const OnNext: SubmitHandler<PaymentDetails> = (data) => {
    // validate from
    setPaymentInfo(data);
    // route to next page
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="cardNumber"
          placeholder="1234 5678 1234 5678"
          label="Card Number"
          // inputMode="numeric"
          keyboardType="numbers-and-punctuation"
        />

        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="expiryDate"
            placeholder="MM/YY"
            label="Expiry Date"
            containerStyle={{ flex: 1 }}
            // inputMode=""
            keyboardType="numbers-and-punctuation"
          />
          <CustomTextInput
            name="cvv"
            placeholder="CVV"
            label="CVV"
            containerStyle={{ flex: 1 }}
            inputMode="numeric"
          />
        </View>

        <CustomCheckbox name="saveCard" label="Save this card?" />
        <CustomSwitch name="cardSwitch" label="Switch Card" />
        <CustomDateTimePicker name="date" />

        <PrimaryButton
          title="Next"
          style={styles.button}
          onPress={form.handleSubmit(OnNext)}
        />
      </FormProvider>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1, padding: 10 },
  button: { marginTop: "auto" },
});
