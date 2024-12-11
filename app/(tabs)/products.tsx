import { Header } from '@/components/header';
import { StyleSheet, Image, Platform, Text, View, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import productData from "@/constants/Products.json";
export default function Product() {
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

  const renderItem = ({ item, index } : any) => {
    if (index % 2 === 0) {
      return (
        <View style={{ flexDirection: 'row', marginBottom: 10, width: '100%' }}>
          <View style={{ flex: 1, paddingRight: 5, display: 'flex', alignItems: 'center' }}>
            <View>
              <Image style={{position: 'relative'}} source={requireImg(item.image)}/>
              <View style={{padding: 5 ,position: 'absolute', width: '100%', display: 'flex', alignItems: 'flex-end'}}>
                <Text style={{ backgroundColor: 'white', padding: 2, paddingHorizontal: 10, borderRadius: 3, color: '#1B7263', fontWeight: 'bold', fontSize: 16}}>${item.price}</Text>
              </View>
            </View>
            <Text style={{textAlign: 'center', fontWeight: '500', color: 'black', fontSize: 16, paddingBottom: 10}}>{item.description}</Text>
            <TouchableOpacity style={{backgroundColor: '#1B7263', width: 60, borderRadius: 4, padding: 3, display: 'flex', alignItems: 'center'}}>
              <Image source={require('@/assets/images/carrin.png')}/>
            </TouchableOpacity>
          </View>
          {productData[index + 1] && (
            <View style={{ flex: 1, paddingLeft: 5, display: 'flex', alignItems: 'center' }}>
              <View>
                <Image source={requireImg(productData[index + 1].image)} />
                <View style={{padding: 5 ,position: 'absolute', width: '100%', display: 'flex', alignItems: 'flex-end'}}>
                  <Text style={{ backgroundColor: 'white', padding: 2, paddingHorizontal: 10, borderRadius: 3, color: '#1B7263', fontWeight: 'bold', fontSize: 16}}>${productData[index + 1].price}</Text>
                </View>
              </View>
              <Text style={{textAlign: 'center', fontWeight: '500', color: 'black', fontSize: 16, paddingBottom: 10}}>{productData[index + 1].description}</Text>
              <TouchableOpacity style={{backgroundColor: '#1B7263', width: 60, borderRadius: 4, padding: 3, display: 'flex', alignItems: 'center'}}>
                <Image source={require('@/assets/images/carrin.png')}/>
              </TouchableOpacity>
            </View>
          )}
        </View>
      );
    }
    return null;
  };

  return (
    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Header/>
      <View style={styles.cart}>
        <Image style={styles.carrin} source={require('@/assets/images/cart.png')}></Image>
      </View>
      <View style={{width: '80%'}}>
        <TextInput placeholder='Search product' style={styles.input} />
        <View style={{position: 'fixed', width: '80%',padding: 3, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <Image source={require("@/assets/images/loupe.png")} style={{width: 20, height: 20}} />
        </View>
      </View>
      <Text style={styles.title}>Products</Text>
      <ScrollView style={styles.servicos}>
        <FlatList
          data={productData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  servicos: {
    marginTop: 20,
    flex: 1
  },
  cart: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'flex-end',
    width: '100%'
  },
  carrin: {
    zIndex: 1,
    position: 'relative',
    bottom: 40,
    shadowColor: '#000', 
    shadowOffset: { width: 2, height:2 }, 
    shadowOpacity: 4, 
    shadowRadius: 4, 
    elevation: 5,
    borderRadius: '100%',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF3869',
    padding: 4,
    paddingHorizontal: 6,
    position: 'relative'
  },
  title: {
    fontWeight: '600',
    fontSize: 21,
    width: '100%',
    textAlign: 'center',
    marginTop: 20
  }
});
