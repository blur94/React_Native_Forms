import { create } from "zustand";
import { PaymentDetails, PersonalDetails } from "../schema";

const initPersonal = {
  fullName: "",
  address: "",
  city: "",
  postCode: "",
  phoneNumber: "",
  country: "",
};

const initPayment = { cardNumber: "", expiryDate: "", cvv: 0, saveCard: false };

const Checkout = create<CheckoutState>((set) => ({
  personalInfo: initPersonal,
  paymentInfo: initPayment,
  setPersonalInfo: (personalInfo) => set(() => ({ personalInfo })),
  setPaymentInfo: (paymentInfo) => set(() => ({ paymentInfo })),
  clearData: () =>
    set(() => ({ personalInfo: initPersonal, paymentInfo: initPayment })),
}));

interface CheckoutState {
  personalInfo: PersonalDetails;
  paymentInfo: PaymentDetails;
  setPersonalInfo: (personalInfo: PersonalDetails) => void;
  setPaymentInfo: (paymentInfo: PaymentDetails) => void;
  clearData: () => void;
}

export default Checkout;
