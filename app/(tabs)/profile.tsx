import { Header } from '@/components/header';
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Image, Platform, Text, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Link, NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp} from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// npm install expo-linear-gradient
// https://reactnative.dev/docs/modal

import userData from "@/constants/Profile.json"
import { RootStackParamList } from '@/components/RootLayout';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User{
    name:String;
    email:String;
    phone:String;
    cep: String;
    rua: String;
    cidade: String;
    estado: String;
};

export default function Profile() {

    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const toLogin = async () => {
        navigation.popToTop();
        navigation.navigate('index');

        const cart = await AsyncStorage.getItem('my-cart');
        await AsyncStorage.setItem('my-cart', JSON.stringify([]));
    }

    const [data,setData] = useState<User>()

    const loadProfile = async()=>{
        let item = await AsyncStorage.getItem("users");
        let idOp = await AsyncStorage.getItem("userId");
    
        if(item ==null || idOp===null){
            navigation.navigate('index');
        return;
        }
    
        let id = Number(idOp)
        let user:User[] = item==null?[]:JSON.parse(item);

        setData(user[id])
    }

    useEffect(()=>{
        setInterval(async()=>{await loadProfile()},1000)
    },[])

    const [email, setEmail] = useState<string>(data?.email?.toString() || '');
    const [phone, setPhone] = useState<string>(data?.phone?.toString() || '');
    const [cep, setCep] = useState<string>(data?.cep?.toString() || '');
    const [rua, setRua] = useState<string>(data?.rua?.toString() || '');
    const [cidade, setCidade] = useState<string>(data?.cidade?.toString() || '');
    const [estado, setEstado] = useState<string>(data?.estado?.toString() || '');


    const saveChanges = async () => {
        const updatedUser: User = {
            name: data?.name || '',
            email,
            phone,
            cep,
            rua,
            cidade,
            estado
        };
    
        // Recupera a lista de usuários do AsyncStorage
        const item = await AsyncStorage.getItem("users");
        if (item != null) {
            let users: User[] = JSON.parse(item);
    
            // Atualiza o usuário com o id atual
            let idOp = await AsyncStorage.getItem("userId");
            if (idOp !== null) {
                let id = Number(idOp);
                users[id] = updatedUser;
    
                // Salva novamente a lista de usuários com as informações atualizadas
                await AsyncStorage.setItem("users", JSON.stringify(users));
            }
        }
    
        // Fecha o modal após salvar as alterações
        setModalVisible(false);
    };
    


    return (
        <LinearGradient style={styles.gradiente} start={{x:.2,y:1}} end={{x:1,y:.3}} locations={[0.1,0.6]} colors={['#f9f9f9', '#f9f9f9', '#f9f9f9',]}>
            <View style={styles.divGeral}>
                <Header />
                <View style={modalVisible ? styles.bgDark : styles.divBody}>
                    <Image source={require('../../assets/images/top-profile.png')} style={styles.img} />
                    <View style={styles.divImg}>
                        <Image source={require("../../assets/images/user.png")} style={styles.imgUser}/>
                    </View>
                    <TouchableOpacity style={styles.divIcon2}>
                        <Image source={require("../../assets/images/lapis.png")} style={styles.imgIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.username}>{data?.name}</Text>
                    <View style={styles.divInfo}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput placeholder='User email' style={styles.input} value={userData.email}></TextInput>
                        <Text style={styles.label}>Phone</Text>
                        <TextInput placeholder='Phone number' style={styles.input} value={userData.phone}></TextInput>
                        <Text style={styles.label}>Address</Text>
                        <View style={styles.inputBox}>
                            <Text style={styles.textBox}>{data?.cep ? data?.cep : "Finalize o registro de suas informações"}</Text>
                            <Text style={styles.textBox}>{data?.rua ? data?.rua : ""}</Text>
                            <Text style={styles.textBox}>{data?.cidade ? data?.cidade : ""}, {data?.estado? data?.estado : ""}</Text>
                            <Text style={styles.textBox}>Receptor: {data?.name ? data?.name : ""}</Text>
                        </View>
                        <View style={styles.divBtn}>
                            <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(true)}>
                                <Text style={styles.textBtn}>Edit informations</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.divIcon} onPress={() => setModalVisible(true)}>
                                <Image source={require("../../assets/images/lapis.png")} style={styles.imgIcon}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.logout} onPress={() => toLogin()}>
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* MODAL */}
            <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}}>
                <View style={styles.modal}>
                    <Pressable style={[styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textButtonClose}>X</Text>
                    </Pressable>
                    <Text style={styles.edit}>Edit info</Text>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={styles.input} value={email} onChangeText={setEmail}></TextInput>
                    <Text style={styles.label}>Phone</Text>
                    <TextInput style={styles.input} value={phone} onChangeText={setPhone}></TextInput>
                    <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                        <View style={{width: 120}}>
                            <Text style={styles.label}>CEP</Text>
                            <TextInput style={styles.input} value={cep} onChangeText={setCep}></TextInput>
                        </View>
                        <View style={{width: 230}}>
                            <Text style={styles.label}>Rua</Text>
                            <TextInput style={styles.input} value={rua} onChangeText={setRua}></TextInput>
                        </View>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                        <View style={{width: 175}}>
                            <Text style={styles.label}>Cidade</Text>
                            <TextInput style={styles.input} value={cidade} onChangeText={setCidade}></TextInput>
                        </View>
                        <View style={{width: 175}}>
                            <Text style={styles.label}>Estado</Text>
                            <TextInput style={styles.input} value={estado} onChangeText={setEstado}></TextInput>
                        </View>
                    </View>
                    <View style={styles.divBtn}>
                        <TouchableOpacity style={styles.btn} onPress={() => {setModalVisible(!modalVisible); saveChanges()}}>
                            <Text style={styles.textBtn}>Save changes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    divGeral: {
        
    },
    bgDark: {
        opacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 2,
          },
        
    },
    gradiente: {
        height: "100%",
    },
    divBody: {
        backgroundColor: "#f9f9f9"
    },
    img: {
        width: "100%",
        height: 150
    },
    imgUser: {
        width: 55,
        height: 55,
        marginLeft: 8
    },
    divImg: {
        backgroundColor: "#FEB3C7",
        borderRadius: "100%",
        height: 100,
        width: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 130,
        left: "38%"
    },
    edit: {
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        fontSize: 20,
        marginBottom: 20
    },
    username: {
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        marginTop: 25,
        fontSize: 20
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
    inputBox: {
        borderWidth: 2,
        borderColor: "#1B7263",
        backgroundColor: "#F9F9F9",
        marginTop: 15,
        marginBottom: 20,
        padding: 8,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        fontFamily: "Poppins"
    },
    divInfo: {
        margin: 30,
        marginTop: 50
    },
    label: {
        fontFamily: "Poppins",
        fontWeight: "bold"
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
    divIcon: {
        backgroundColor: "#FEB3C7",
        width: 22,
        height: 22,
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        right: 85,
        bottom: 130
    },
    divIcon2: {
        backgroundColor: "#F9F9F9",
        width: 22,
        height: 22,
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        right: 140,
        top: 140
    },
    imgIcon: {
        width: 12,
        height: 12,
    },
    textBox: {
        fontFamily: "Poppins",
    },
    modal: {
        zIndex: 50,
        padding: 15,
        position: "fixed",
        top: 170,
        width: "100%",
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingBottom: 40
    },
    buttonClose: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 15
    },
    textButtonClose: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25
    },
    logout: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8
    }
});
