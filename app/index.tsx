import { RootStackParamList } from '@/components/RootLayout';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Text, Image, StyleSheet, View } from 'react-native';

export default function Login(){
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const irTabs = () => {
        navigation.navigate("(tabs)");
    }
    
    return(
        <div>
            <Image source={require('../assets/images/calda.png')} style={styles.img}/>
            <div style={styles.div}>
                <div style={styles.title}>
                    <h2 style={styles.h2}>Login</h2>
                    <div style={styles.divLogo}>
                        <Image source={require('../assets/images/cupcake (1).png')} style={styles.logo}/>
                    </div>
                </div>
                <label>E-mail</label>
                <input type='email' placeholder='Your e-mail' style={styles.input}></input>
                <label>Password</label>
                <input type='password' placeholder='Your password' style={styles.input}></input>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    img: {
      width: "100%"
    },
    logo: {
        width: 50,
        height: 50
    },
    divLogo: {
        borderRadius: "100%",
        borderColor: "#FF3869",
        borderWidth: 2,
        padding:2
    },
    h2: {

    },
    input: {

    },
    div: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between'
    }
  });




