import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";
import { useState } from "react";

export default function App() {
  [cep, setCep] = useState();
  [response, setResponse] = useState({});
  async function handleEnter() {
    axios({
      url: `https://viacep.com.br/ws/${cep}/json/`,
    }).then((response) => {
      setResponse(response.data);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>Consumo simples da API ViaCEP</Text>
      <Text style={styles.textMain}>Envie o texto para buscar!</Text>

      <TextInput
        placeholderTextColor="#FFF"
        style={styles.textinput}
        placeholder="Insira o seu CEP aqui"
        onChangeText={(e) => setCep(e)}
        onSubmitEditing={() => handleEnter()}
      ></TextInput>
      <Text style={styles.textLight}>Bairro : {response.bairro}</Text>
      <Text style={styles.textLight}>CEP : {response.cep}</Text>
      <Text style={styles.textLight}>Complemento : {response.complemento}</Text>
      <Text style={styles.textLight}>DDD : {response.ddd}</Text>
      <Text style={styles.textLight}>GIA : {response.gia}</Text>
      <Text style={styles.textLight}>IBGE : {response.ibge}</Text>
      <Text style={styles.textLight}>Localidade : {response.localidade}</Text>
      <Text style={styles.textLight}>Logradouro : {response.logradouro}</Text>
      <Text style={styles.textLight}>SIAFI : {response.siafi}</Text>
      <Text style={styles.textLight}>UF : {response.uf}</Text>
      <Text style={styles.textLight}>Unidade : {response.unidade}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  textMain: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    width: "100%",
  },
  textLight: {
    color: "white",
    fontSize: 16,
    textAlign: "left",
    width: "100%",
  },
  textinput: {
    color: "white",
    backgroundColor: "#161616",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    textAlign: "center",
    height: 40,
    borderRadius: 5,
    borderColor: "white",

  },
});
