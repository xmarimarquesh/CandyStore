import { Header } from '@/components/header';
import React from 'react';
import { StyleSheet, Image, Platform, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
// expo install expo-linear-gradient

export default function Profile() {
    return (
        <View style={styles.divGeral}>
            <Header />
            <Image source={require('../../assets/images/top-profile.png')} style={styles.img} />
            <Text>PROFILE</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    divGeral: {
        backgroundColor: "#000000"
    },
    gradiente: {
        height: "100%",

    },
    img: {
        width: "100%",
    }
});
