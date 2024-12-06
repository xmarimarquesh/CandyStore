import { View, StyleSheet, Image, Text } from "react-native"

export const Header = () => {
    return (
        <View style={styles.view}>
            <View style={styles.logo}>
                <Image style={styles.img} source={require('@/assets/images/cupcake (1).png')}/>
            </View>
            <Text style={styles.title}>CandyStore</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
      width: "100%",
      backgroundColor: '#1B7263',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row'
    },
    img: {
      width: 50,
      height: 50
    },
    logo: {
        backgroundColor: 'white',
        padding: 6,
        borderRadius: '100%',
        borderWidth: 2,
        borderColor: '#FF3869',
        margin: 10
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    }
  });