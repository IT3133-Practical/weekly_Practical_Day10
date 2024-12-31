import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home  from './components/Home';
import ContactUs from './components/ContactUs';
 
const Stack = createNativeStackNavigator();
export default function App() {
const Stack=createNativeStackNavigator();
 
  return (
 
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='contact' component={ContactUs}/>
      </Stack.Navigator>
 
      </NavigationContainer>
    </SafeAreaProvider>
 
  );
}