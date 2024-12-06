<<<<<<< HEAD
import { Button, Text, Image, StyleSheet, View } from 'react-native';

export default function Login() {
    return(
        <div>
            <Image source={require('../assets/images/calda.png')} style={styles.img}/>
        </div>
    );
}

const styles = StyleSheet.create({
    img: {
      width: 200,
    }
  });
=======
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/components/RootLayout';


export default function Home(){
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const irTabs = () => {
        navigation.navigate("(tabs)");
    }
    return (
        <button onClick={irTabs}>OK</button>
    )
}
>>>>>>> dev
