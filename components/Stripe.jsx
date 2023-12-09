import React, {useState} from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  LiteCreditCardInput,
  CreditCardInput,
} from "react-native-credit-card-input";
import { Button } from "react-native-elements";
import { useStripe } from '@stripe/stripe-react-native';
import { useNavigation } from "@react-navigation/native";

const USE_LITE_CREDIT = false;

const Stripe = () => {
  const { createToken } = useStripe();
  const navigation = useNavigation();
  const [cardDetails, setCardDetails] = useState();

  const _onChange = (formData) => {
    setCardDetails(formData.values);
  };

  const _onFocus = (field) => {
    console.log(field);
  };

  const handlePaymentSubmit = async () => {
    if (!cardDetails) {
      console.log('No card details');
      return;
    }
    const response = await createToken({ card: cardDetails });
    if (response.error) {
      console.log('Error in token creation:', response.error);
    } else {
      console.log('Token created:', response.token);
      navigation.navigate("Map")
    }
  };

  return (
    <>
      <View style={{ flex: 1, }}>
        <View style={styles.container}>
          {USE_LITE_CREDIT ? (
            <LiteCreditCardInput
              onChange={_onChange}
              onFocus={_onFocus}
              inputStyle={styles.inputStyle}
            />
          ) : (
            <CreditCardInput
              onChange={_onChange}
              onFocus={_onFocus}
              inputStyle={styles.inputStyle}
            />
          )}
          <Button
            title="Valider le paiement"
            buttonStyle={styles.paymentButton}
            onPress={handlePaymentSubmit}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom:20
  },
  paymentButton: {
    marginTop: 0,
    width: 200,
    height: 45,
    backgroundColor: "#3a0ca3",
  },
});

export default Stripe;
