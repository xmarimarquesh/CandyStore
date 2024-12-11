import { Header } from '@/components/header';
import React from 'react';
import { StyleSheet, Image, Platform, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// expo install expo-linear-gradient

export default function ForgotPass() {
  return (
    <>
      <Header/>
      <LinearGradient style={styles.gradiente} start={{x:.2,y:1}} end={{x:1,y:.3}} locations={[0.1,0.6]} colors={['#FF3869', '#FF97B1FF', '#FFF4F7FF',]}>
      <Text>PROFILE</Text>

        </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  gradiente: {
    height: "100%", 
    
  }
});
