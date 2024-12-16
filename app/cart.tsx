import { Header } from '@/components/header';
import { StyleSheet, Image, Platform, Text, View, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import cartData from "@/constants/Cart.json";

export default function Cart() {

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

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.cartItem}>
      <Image source={requireImg(item.image)} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={{display: 'flex', alignItems: 'center', flex: 1, width: '100%'}}>
      <Header/>
      <View style={{width: '90%', margin: 16}}>
        <Image source={require('@/assets/images/arrow.png')} style={{width: 36, height: 36}}/>
      </View>
      <View style={{width:'100%'}}>
        <Text style={styles.title}>My Cart</Text>
        <FlatList
          data={cartData} 
          renderItem={renderItem}
          keyExtractor={(item) => item.id} 
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 21,
    width: '100%',
    textAlign: 'center',
    marginVertical: 16,
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
});
