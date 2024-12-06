import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { Header } from '@/components/header';

import servicesJson from "@/constants/Services.json";

export default function HomeScreen() {
  return (
    <View style={styles.view}>
      <Header/>
      <View style={styles.cart}>
        <Text style={styles.text}>Welcome, Fulano!</Text>
        <Image style={styles.carrin} source={require('@/assets/images/cart.png')}></Image>
      </View>
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
          {servicesJson.map((serv) => (
            <View key={serv.id}>
              {/* <Image source={require(serv.image)}/> */}
              <Text>{serv.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "100%"
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
    position: 'relative',
    bottom: 40,
    zIndex: 1,
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
    flexWrap: 'wrap'
  }
});
