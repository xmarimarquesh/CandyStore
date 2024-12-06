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