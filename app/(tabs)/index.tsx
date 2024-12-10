import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, ScrollView, FlatList, Button } from 'react-native';
import { Header } from '@/components/header';

import servicesJson from "@/constants/Services.json";
export default function HomeScreen() {

  const requireImg = (img: string) => {

    const imageMap : any = {
      "sec1.png": require("@/assets/images/sec1.png"),
      "sec2.png": require("@/assets/images/sec2.png"),
      "sec3.png": require("@/assets/images/sec3.png"),
      "sec4.png": require("@/assets/images/sec4.png"),
      "sec5.png": require("@/assets/images/sec5.png"),
      "sec6.png": require("@/assets/images/sec6.png"),
    };
  
    return imageMap[img] || require("@/assets/default.png");
  }

  const renderItem = ({ item, index } : any) => {
    if (index % 2 === 0) {
      return (
        <View style={{ flexDirection: 'row', marginBottom: 10, width: '100%' }}>
          <View style={{ flex: 1, paddingRight: 5 }}>
            <Image source={requireImg(item.image)} style={{position: 'relative'}}/>
            <View style={{position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-end'}}>
              <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: 20, paddingBottom: 10}}>{item.description}</Text>
            </View>
          </View>
          {servicesJson[index + 1] && (
            <View style={{ flex: 1, paddingLeft: 5 }}>
              <Image source={requireImg(servicesJson[index + 1].image)} style={{position: 'relative'}} />
              <View style={{position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: 20, paddingBottom: 10}}>{servicesJson[index + 1].description}</Text>
              </View>
            </View>
          )}
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.view}>
      <Header/>
      <View style={styles.cart}>
        <Text style={styles.text}>Welcome, Fulano!</Text>
        <Image style={styles.carrin} source={require('@/assets/images/cart.png')}></Image>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{marginTop: 24}}>
          <Image source={require('../../assets/images/boloPrincipal.png')} alt="img" style={styles.img} />
          <View style={styles.cake}>
            <Text style={styles.cakeText}>Find your<br/>favorite cake</Text>
            <TouchableOpacity style={styles.cakeButton}><Text style={{color: 'white', textAlign: 'center'}}>Shop Now</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.services}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Services</Text>
          <View style={styles.servicos}>
            <FlatList
              data={servicesJson}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    display: 'flex',
    flex: 1
  },
  img: {
    width: "100%",
    height: 250,
    position: 'relative',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
    margin: 12
  },
  cakeText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 32,
    width: '100%',
    textAlign: 'center',
    marginTop: 12
  },
  cake: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'column',
    height: 250
  },
  cakeButton: {
    backgroundColor: '#FF3869',
    padding: 10,
    borderRadius: 24,
    width: 128,
    textAlign: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 2, height:2 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 4, 
    elevation: 5,
  },
  cart: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 12,
    justifyContent: 'space-between',
  },
  carrin: {
    zIndex: 1,
    position: 'relative',
    bottom: 40,
    shadowColor: '#000', 
    shadowOffset: { width: 2, height:2 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 4, 
    elevation: 5,
    borderRadius: '100%',
  },
  services: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 48
  },
  servicos: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 20
  }
});
