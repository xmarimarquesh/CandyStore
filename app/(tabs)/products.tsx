import { Header } from '@/components/header';
import { StyleSheet, Image, Platform, Text, View, TextInput, FlatList } from 'react-native';
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
          <View style={{ flex: 1, paddingRight: 5 }}>
            <Image source={requireImg(item.image)}/>
            <Text style={{textAlign: 'center', fontWeight: '500', color: 'black', fontSize: 16, paddingBottom: 10}}>{item.description}</Text>
            
          </View>
          {productData[index + 1] && (
            <View style={{ flex: 1, paddingLeft: 5 }}>
              <Image source={requireImg(productData[index + 1].image)} />
              <Text style={{textAlign: 'center', fontWeight: '500', color: 'black', fontSize: 16, paddingBottom: 10}}>{productData[index + 1].description}</Text>
            </View>
          )}
        </View>
      );
    }
    return null;
  };

  return (
    <>
      <Header/>
      <View style={styles.cart}>
        <Image style={styles.carrin} source={require('@/assets/images/cart.png')}></Image>
      </View>
      <TextInput placeholder='Search product' style={styles.input} />
      <Text style={styles.title}>Products</Text>
      <View style={styles.servicos}>
        <FlatList
          data={productData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  servicos: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 20,
    alignItems: 'center'
  },
  cart: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 12,
    justifyContent: 'flex-end',
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
    borderBottomWidth: 1,
    borderBottomColor: '#FF3869',
    padding: 4,
    marginHorizontal: 15
  },
  title: {
    fontWeight: '600',
    fontSize: 21,
    width: '100%',
    textAlign: 'center',
    marginTop: 20
  }
});
