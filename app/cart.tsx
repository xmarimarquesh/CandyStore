import { Header } from '@/components/header';
import { StyleSheet, Image, Platform, Text, View, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import productData from "@/constants/Products.json";

export default function Cart() {
  return (
    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Header/>
      <Text>CART</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
