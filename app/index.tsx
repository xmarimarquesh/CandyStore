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


