import { Text, View, StyleSheet } from "react-native";

import { Link, router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { PrimaryButton } from "../../components/CustomButton";
import Checkout from "../../store/checkout";
import { splitCamelCase } from "../../utils/split-words";

export default function ConfirmForm() {
  const { personalInfo, paymentInfo, clearData } = Checkout();

  const OnSubmit = () => {
    // send data to server
    router.dismissAll();
    router.back();
    // clear data
    clearData();
  };

  return (
    <KeyboardAwareScrollView>
      <View style={{ gap: 10, flex: 1 }}>
        <InfoCard info={personalInfo} href="/checkout" title="Personal" />

        <InfoCard info={paymentInfo} href="/checkout/payment" title="Payment" />

        <PrimaryButton
          title="Submit"
          onPress={OnSubmit}
          style={styles.button}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    paddingBottom: 25,
    gap: 15,
  },
  dataContainer: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 10,
    gap: 3,
  },
  dataContainerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  button: { marginTop: "auto" },
});

interface InfoCardProps {
  info: Record<string, any> | null;
  href: string;
  title: string;
}

const InfoCard = ({ info, href, title }: InfoCardProps) => {
  return (
    info && (
      <View style={styles.dataContainer}>
        <View style={styles.dataContainerHeader}>
          <Text style={styles.title}>{title}</Text>
          <Link href={href} style={{ color: "#005055", fontWeight: "600" }}>
            Edit
          </Link>
        </View>
        {Object.entries(info).map(([key, value]) => (
          <Text key={key}>
            {splitCamelCase(key)}: {value?.toString()}
          </Text>
        ))}
      </View>
    )
  );
};
