import React from "react";
import { StyleSheet, View , Text} from "react-native";
import {
  LiteCreditCardInput,
  CreditCardInput,
} from "react-native-credit-card-input";
import Ionicons from "react-native-vector-icons/Ionicons";

const USE_LITE_CREDIT = false;

const Stripe = () => {
  const _onChange = (formData) => {
    console.log(JSON.stringify(formData, null, ""));
  };

  const _onFocus = (field) => {
    console.log(field);
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          width: "57%",
          justifyContent: "space-between",
        }}
      >
        <Ionicons
          name="chevron-back"
          size={40}
          color="black"
          style={{ marginLeft: 10 }}
          onPress={() => {}}
        />
        <Text style={{ fontWeight: "600", fontSize: 17 }}>Payement</Text>
      </View>
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
    backgroundColor:"white"
  },
  //   inputStyle: {
  //     width: '80%', // Adjust the width as needed
  //     marginVertical: 10, // Adjust the vertical margin as needed
  //     flexDirection:"column",
  //     borderWidth: 1,
  //     borderRadius: 5,
  //   },
});

export default Stripe;

// import { StyleSheet, Text, TextInput } from "react-native";
// import React, { useState } from "react";
// import { View, Button } from "react-native";
// import {
//   CardField,
//   useStripe,
//   useConfirmPayment,
// } from "@stripe/stripe-react-native";
// const API_URL = "http://localhost:3000";

// const Stripe = (props) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryMonth, setExpiryMonth] = useState("");
//   const [expiryYear, setExpiryYear] = useState("");
//   const [cvc, setCvc] = useState("");
//   const { confirmPayment, loading } = useConfirmPayment();

//   const fetchPaymentIntentClientSecret = async () => {
//     const response = await fetch(`${API_URL}/create-payment-intent`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const { clientSecret, error } = await response.json();
//     return { clientSecret, error };
//   };

//   const handlePayPress = async () => {
//     // Rassembler les informations de facturation du client
//     if (
//       !cardNumber ||
//       !expiryMonth ||
//       !expiryYear ||
//       !cvc ||
//       !firstName ||
//       !lastName ||
//       !email
//     ) {
//       Alert.alert("Veuillez saisir tous les détails de paiement.");
//       return;
//     }

//     const billingDetails = {
//       email: email,
//       name: `${firstName} ${lastName}`,
//     };

//     try {
//       const { clientSecret, error } = await fetchPaymentIntentClientSecret();

//       if (error) {
//         console.log("Impossible de traiter le paiement");
//       } else {
//         const { paymentIntent, error } = await confirmPayment(clientSecret, {
//           type: "Card",
//           billingDetails: billingDetails,
//         });
//         if (error) {
//           alert(`Erreur de confirmation du paiement : ${error.message}`);
//         } else if (paymentIntent) {
//           alert("Paiement réussi");
//           console.log("Paiement réussi", paymentIntent);
//         }
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Prénom</Text>
//         <TextInput
//           autoCapitalize="none"
//           placeholder="Prénom"
//           keyboardType="text"
//           value={firstName}
//           onChangeText={setFirstName}
//           style={styles.input}
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Nom</Text>
//         <TextInput
//           autoCapitalize="none"
//           placeholder="Nom"
//           keyboardType="text"
//           value={lastName}
//           onChangeText={setLastName}
//           style={styles.input}
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>E-mail</Text>
//         <TextInput
//           autoCapitalize="none"
//           placeholder="E-mail"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={setEmail}
//           style={styles.input}
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Numéro de carte</Text>
//         <TextInput
//           autoCapitalize="none"
//           placeholder="Numéro de carte"
//           keyboardType="numeric"
//           value={cardNumber}
//           onChangeText={setCardNumber}
//           style={styles.input}
//         />
//       </View>
//       <View style={styles.row}>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Mois d'expiration</Text>
//           <TextInput
//             autoCapitalize="none"
//             placeholder="MM"
//             keyboardType="numeric"
//             value={expiryMonth}
//             onChangeText={setExpiryMonth}
//             style={[styles.input, styles.smallInput]}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Année d'expiration</Text>
//           <TextInput
//             autoCapitalize="none"
//             placeholder="AAAA"
//             keyboardType="numeric"
//             value={expiryYear}
//             onChangeText={setExpiryYear}
//             style={[styles.input, styles.smallInput]}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>CVC</Text>
//           <TextInput
//             autoCapitalize="none"
//             placeholder="CVC"
//             keyboardType="numeric"
//             value={cvc}
//             onChangeText={setCvc}
//             style={[styles.input, styles.smallInput]}
//           />
//         </View>
//       </View>
//       <View style={styles.cardContainer}>
//         <CardField
//           postalCodeEnabled={true}
//           placeholder={{
//             number: "4242 4242 4242 4242",
//           }}
//           cardStyle={styles.card}
//           style={styles.cardField}
//           onCardChange={(cardDetails) => {
//             setCardDetails(cardDetails);
//           }}
//         />
//       </View>
//       <Button onPress={handlePayPress} title="Payer" disabled={loading} />
//     </View>
//   );
// };

// export default Stripe;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     margin: 20,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     marginBottom: 5,
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   input: {
//     backgroundColor: "#efefef",
//     borderRadius: 8,
//     fontSize: 20,
//     height: 50,
//     padding: 10,
//   },
//   smallInput: {
//     width: 80,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   cardContainer: {
//     height: 50,
//     marginVertical: 30,
//   },
//   card: {
//     backgroundColor: "#efefef",
//   },
//   cardField: {
//     flex: 1,
//   },
// });
