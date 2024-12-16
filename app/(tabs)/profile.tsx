import { Header } from '@/components/header';
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Image, Platform, Text, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// npm install expo-linear-gradient
// https://reactnative.dev/docs/modal

import userData from "@/constants/Profile.json"

export default function Profile() {

    const [modalVisible, setModalVisible] = useState(false);
    const bottomSheetRef = useRef<BottomSheet>(null);

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
                    <Text style={styles.username}>{userData.username}</Text>
                    <View style={styles.divInfo}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput placeholder='User email' style={styles.input} value={userData.email}></TextInput>
                        <Text style={styles.label}>Phone</Text>
                        <TextInput placeholder='Phone number' style={styles.input} value={userData.phone}></TextInput>
                        <Text style={styles.label}>Address</Text>
                        <View style={styles.inputBox}>
                            <Text style={styles.textBox}>{userData.cep}</Text>
                            <Text style={styles.textBox}>{userData.rua}</Text>
                            <Text style={styles.textBox}>{userData.cidade}, {userData.estado}</Text>
                            <Text style={styles.textBox}>Receptor: {userData.receptor}</Text>
                        </View>
                        <View style={styles.divBtn}>
                            <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(true)}>
                                <Text style={styles.textBtn}>Edit informations</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.divIcon} onPress={() => setModalVisible(true)}>
                                <Image source={require("../../assets/images/lapis.png")} style={styles.imgIcon}/>
                            </TouchableOpacity>
                        </View>
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
                    <TextInput placeholder='User email' style={styles.input} value={userData.email}></TextInput>
                    <Text style={styles.label}>Phone</Text>
                    <TextInput placeholder='Phone number' style={styles.input} value={userData.phone}></TextInput>
                    <Text style={styles.label}>Address</Text>
                    <View style={styles.inputBox}>
                        <Text style={styles.textBox}>{userData.cep}</Text>
                        <Text style={styles.textBox}>{userData.rua}</Text>
                        <Text style={styles.textBox}>{userData.cidade}, {userData.estado}</Text>
                        <Text style={styles.textBox}>Receptor: {userData.receptor}</Text>
                    </View>
                    <View style={styles.divBtn}>
                        <TouchableOpacity style={styles.btn}>
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
});
