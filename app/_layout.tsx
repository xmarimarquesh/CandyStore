import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { Poppins_700Bold, Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';


export default function RootLayout() {

  const [loaded, error] = useFonts({
    Poppins: Poppins_400Regular,
  });

  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="register" options={{ headerShown: false }} />
      </Stack>
  );
}
