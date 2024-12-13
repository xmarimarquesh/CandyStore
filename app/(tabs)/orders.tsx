import { Header } from '@/components/header';
import { StyleSheet, Image, Platform, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import pedidosData from "@/constants/Orders.json"
import { Link, NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/components/RootLayout';

export default function Order() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderItem = ({ item, index } : any) => {

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

    return (
      <View style={{ flexDirection: 'column', marginBottom: 10, width: '100%', padding: 10 }}>
        <Text style={{width: '100%', textAlign: 'center', fontSize: 18, paddingVertical: 15}}>Order code: <strong>{item.id}</strong></Text>
        <View>
          {item.products.map((produto : any) => {
            return (
              <View key={produto.id} style={{flexDirection: 'row', padding: 8}}>
                <Image style={{width: 100, height: 100}} source={requireImg(produto.image)}></Image>
                <View style={{padding: 8}}>
                  <Text style={{fontWeight: '500', fontSize: 16}}>{produto.quantidade} x {produto.name}</Text>
                  <Text style={{fontWeight: '500', fontSize: 16}}>${produto.price}</Text>
                </View>
              </View>
            )})}
        </View>
        <Text style={{width: '95%', textAlign: 'right', fontWeight: 'bold', color: '#1B1B1BFF', fontSize: 18, marginBottom: 15}}>Total: ${item.price}</Text>
        <View>
          <View style={{marginVertical: 10, alignItems: 'center'}}>
            <View style={{position: 'relative',width: '89%', backgroundColor: '#FF3869', height: 2}}/>
            <View style={{position: 'fixed', flexDirection: 'row', width: '87%', justifyContent: 'space-between'}}>
              <View style={{width: 7, backgroundColor: '#FF3869', height: 7, borderEndEndRadius: '100%', borderEndStartRadius: '100%'}}/>
              <View style={{width: 7, backgroundColor: '#FF3869', height: 7, borderEndEndRadius: '100%', borderEndStartRadius: '100%'}}/>
              <View style={{width: 7, backgroundColor: '#FF3869', height: 7, borderEndEndRadius: '100%', borderEndStartRadius: '100%'}}/>
              <View style={{width: 7, backgroundColor: '#FF3869', height: 7, borderEndEndRadius: '100%', borderEndStartRadius: '100%'}}/>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{color: 'green', fontWeight: '600'}}>Requested</Text>
            <Text style={item.status >= 2 ? {color: 'green', fontWeight: '600'} : {color: 'gray', fontWeight: '600'}}>Preparing</Text>
            <Text style={item.status >= 3 ? {color: 'green', fontWeight: '600'} : {color: 'gray', fontWeight: '600'}}>Sending</Text>
            <Text style={item.status >= 4 ? {color: 'green', fontWeight: '600'} : {color: 'gray', fontWeight: '600'}}>Delivered</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
            <Text style={{color: 'gray', fontWeight: '400'}}>{item.data} - {item.time}</Text>
            <TouchableOpacity style={{backgroundColor: '#FF3869', paddingHorizontal: 10, padding: 3, borderRadius: 4}}><Text style={{color: 'white'}}>Cancel</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{width: '100%', backgroundColor: '#C6C6C69F', height: 2, marginTop: 24}}/>
      </View>
    );
  }

  const irCart = () => {
    navigation.navigate("cart");
  }


  return (
    <View style={{display: 'flex', alignItems: 'center', flex: 1}}>
      <Header/>
      <View style={styles.cart}>
        <TouchableOpacity onPress={irCart}>
          <Image style={styles.carrin} source={require('@/assets/images/cart.png')}></Image>
        </TouchableOpacity>
      </View>
      <ScrollView style={{width: '100%'}}>
        <Text style={styles.title}>My Orders</Text>
        <View style={{width: '100%', backgroundColor: '#C6C6C69F', height: 2, marginTop: 24}}/>
        <View>
          <FlatList
            data={pedidosData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
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
  },
  cart: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'flex-end',
    width: '100%',
    backgroundColor: 'transparent' 
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
});
