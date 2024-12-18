import { Header } from '@/components/header';
import React from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { Link, NavigationProp, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '@/components/RootLayout';
// npm install expo-linear-gradient

export default function ForgotPass() {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const toCodePass = () => {
    navigation.navigate("codePass");
  }

  return (
    <>
      <LinearGradient style={styles.gradiente} start={{ x: 2, y: 2 }} end={{ x: 1, y: 15 }} locations={[0.1, 0.3]} colors={['#F35781', '#F36389FF', '#FF97B1FF', '#FAA5BCFF', '#FFCDDAFF', '#F9F9F9']}>
        <View style={styles.div}>
          <View style={styles.divLogo}>
            <Image source={require('../assets/images/cupcake (1).png')} style={styles.logo} />
          </View>
          <View>
              <Text style={[styles.h2]}>Recover password</Text>
              <Text style={styles.divGeral}>E-mail</Text>
              <TextInput placeholder='Your e-mail' style={styles.input}></TextInput>
              <View style={styles.divBtn}>
                <TouchableOpacity onPress={toCodePass} style={styles.btn}>
                  <Text style={styles.textBtn}>Send email</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  gradiente: {
    height: "100%",
    display: "flex",
    justifyContent: "center"
  },
  divGeral: {
    fontFamily: "Poppins",
    color: "white",
    width: 320
  },
  logo: {
    width: 70,
    height: 70
  },
  divLogo: {
    borderRadius: "100%",
    borderColor: "#FF3869",
    backgroundColor: "#F5BFCDFF",
    borderWidth: 2,
    padding: 2,
    width: 80,
    marginBottom: 60
  },
  h2: {
    color: "#1B7263",
    fontWeight: "bold",
    fontSize: 22,
    fontFamily: "Poppins",
    marginBottom: 30
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: "#1B7263",
    backgroundColor: "#F9F9F9",
    marginTop: 10,
    marginBottom: 20,
    padding: 8,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    fontFamily: "Poppins"
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    margin: 30,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  divBtn: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poppins"
  },
  btn: {
    backgroundColor: "#1B7263",
    width: "60%",
    height: 40,
    borderWidth: 0,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins"
  },
  textBtn: {
    fontSize: 18,
    color: "#f9f9f9",
    fontFamily: "Poppins"
  },
});

