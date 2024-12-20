import { Header } from '@/components/header';
import { StyleSheet, Image, Platform, Text, View, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import cartData from "@/constants/Cart.json";
import { Link, NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/components/RootLayout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

interface Cart {
  id: string;
  description: string;
  price: number;
}

export default function Cart() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const [qtd, setQtd] = useState<number[]>([]);
  const [total, setTotal] = useState<Float>(0);

  const changeQtd = (id: number, op: string) => {
    const newQtd = [...qtd];
    if(op === "sum") {
      newQtd[id]++;
    } else {
      if(newQtd[id] == 0) {
        newQtd[id] == 0;
      }
      else {
        newQtd[id]--;
      }
    }
    setQtd(newQtd);
  }

  useEffect(() => {
    const getCartProducts = async() => {
      try {
        const cart = await AsyncStorage.getItem("my-cart");
        const cartProducts = cart ? JSON.parse(cart) : [];
        setCartItems(cartProducts);
        setQtd(new Array(cartProducts.length).fill(1));
      }
      catch (e) {
        console.log("Carrinho vazio")
      }
    }

    getCartProducts();
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item, index) => {
      const itemTotal = item.price * qtd[index];  
      return total + itemTotal;  
    }, 0);
  };

  const requireImg = (img: string) => {

    const imageMap : any = {
      "prod1.png": require("@/assets/images/prod1.png"),
      "prod2.png": require("@/assets/images/prod2.png"),
      "prod3.png": require("@/assets/images/prod3.png"),
      "prod4.png": require("@/assets/images/prod4.png"),
      "prod5.png": require("@/assets/images/prod5.png"),
      "prod6.png": require("@/assets/images/prod6.png"),
      "prod7.png": require("@/assets/images/prod7.png"),
      "prod8.png": require("@/assets/images/prod8.png"),
    };
  
    return imageMap[img] || require("@/assets/default.png");
  }

  const irTabs = () => {
    navigation.navigate("(tabs)");
  }

  const renderItem = ({ item, index }: { item: any, index: number }) => (
    <View style={styles.cartItem}>
      <Image source={requireImg(item.image)} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>${item.price * qtd[index]}</Text>
      </View>
      <View style={{width: '25%'}}>
        <View style={{display: 'flex', flexDirection: 'row', width: 48}}>
          <TouchableOpacity style={{backgroundColor: '#FF3869', width: 24, height: 24, justifyContent: 'center', alignItems: 'center', borderRadius: '100%'}}>
            <Text style={{color: 'white', fontWeight: '500', fontSize: 20, textAlign: 'center', marginBottom: 4}} onPress={() => changeQtd(index, "del")}>-</Text>
          </TouchableOpacity>
          <Text style={{marginLeft: 6, marginRight: 6, fontWeight: '500', fontSize: 18}}>{qtd[index]}</Text>
          <TouchableOpacity style={{backgroundColor: '#FF3869', width: 24, height: 24, justifyContent: 'center', alignItems: 'center', borderRadius: '100%'}}>
            <Text style={{color: 'white', fontWeight: '500', fontSize: 24, textAlign: 'center', marginBottom: 4}} onPress={() => changeQtd(index, "sum")}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{display: 'flex', alignItems: 'center', flex: 1, width: '100%'}}>
      <Header/>
      <TouchableOpacity onPress={irTabs} style={{width: '90%', marginTop: 16}}>
        <Image source={require('@/assets/images/arrow.png')} style={{width: 36, height: 36}}/>
      </TouchableOpacity>
      <Text style={styles.title}>My Cart</Text>
      <ScrollView style={{width:'90%', marginBottom: 10}}>
        <FlatList
          data={cartItems} 
          renderItem={renderItem}
          keyExtractor={(item) => item.id} 
        />
        <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20}}>
          <Text style={{fontWeight: "700", fontSize: 16}}>Total: ${calculateTotal().toFixed(2)}</Text>
          <TouchableOpacity style={{backgroundColor: '#FF3869', paddingHorizontal: 40, padding: 4, borderRadius: 4}}><Text style={{color: 'white'}}>Order</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 21,
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
  },
  cartItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
  },
  productImage: {
    width: 70,
    height: 70,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productDescription: {
    fontSize: 16,
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
})
