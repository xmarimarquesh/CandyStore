import { RootStackParamList } from '@/components/RootLayout';
import { Link, NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User{
    name:String;
    email:String;
    password:String;
};

export default function Register(){
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const irLogin = () => {
        navigation.navigate("index");
    }
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error,setError] = useState(false);

    const onPress = async() => {
        var item = await AsyncStorage.getItem("users");
        var user:User[] = item==null?[]:JSON.parse(item);
        user.push({name,email,password})
        await AsyncStorage.setItem("users",JSON.stringify(user));
        navigation.navigate('index');
    };
    
    return(
        <View>
            <Image source={require('../assets/images/calda.png')} style={styles.img}/>
            <View style={styles.div}>
                <View style={styles.title}>
                    <Text style={[styles.h2, styles.divGeral]}>Register</Text>
                    <View style={styles.divLogo}>
                        <Image source={require('../assets/images/cupcake (1).png')} style={styles.logo}/>
                    </View>
                </View>
                <Text style={styles.divGeral}>E-mail</Text>
                <TextInput placeholder='Your e-mail' value={email} style={styles.input} onChangeText={setEmail}></TextInput>
                <Text style={styles.divGeral}>Name</Text>
                <TextInput placeholder='Your name' value={name} style={styles.input} onChangeText={setName}></TextInput>
                <Text style={styles.divGeral}>Password</Text>
                <TextInput placeholder='Password' secureTextEntry={true} value={password} style={styles.input} onChangeText={setPassword}></TextInput>
                <Text style={styles.divGeral}>Confirm password</Text>
                <TextInput placeholder='Confirm password' secureTextEntry={true} value={confirmPassword} style={styles.input} onChangeText={setConfirmPassword}></TextInput>
                <View style={styles.divBtn}>
                    <TouchableOpacity onPress={onPress} style={styles.btn}>
                        <Text style={styles.textBtn}>Sign up</Text>
                    </TouchableOpacity>
                    <View style={styles.aDiv}>
                        <Text style={styles.divGeral}>Already have an account? </Text>
                        <TouchableOpacity onPress={irLogin}>
                            <Text style={styles.sign}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    divGeral: {
        fontFamily: "Poppins"
    },
    img: {
      width: "100%"
    },
    logo: {
        width: 50,
        height: 50
    },
    divLogo: {
        borderRadius: "100%",
        borderColor: "#FF3869",
        borderWidth: 2,
        padding:2,
        width: 60
    },
    h2: {
        color:"#1B7263",
        fontWeight: "bold",
        fontSize: 22,
        fontFamily: "Poppins",  
    },
    input: {
        borderWidth: 0,
        borderBottomWidth: 2,
        borderColor: "#1B7263",
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
        marginTop: 15
    },
    aDiv: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        fontFamily: "Poppins"
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 15,
        // fontFamily: 'Poppins-Regular',
        flexDirection: "row",
        alignItems: "center",
        fontFamily: "Poppins"
    },
    a: {
        fontSize: 14,
        display: "flex",
        justifyContent: "flex-end",
        color: "#3895FF",
        textDecorationLine: "underline",
        fontFamily: "Poppins"
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
    sign: {
        color: "#3895FF",
        fontSize: 16
    }
  });




