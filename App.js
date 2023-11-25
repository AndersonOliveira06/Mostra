import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Locations from './pages/Locations/Locations'
import Star from './pages/Star/Star'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ title: "Tela 01" }} />
        <Stack.Screen name="Register" component={Register} options={{ title: "Tela 02" }} />
        <Stack.Screen name="Home" component={Home} options={{ title: "Tela 03" }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: "Tela 04" }} />
        <Stack.Screen name="Locations" component={Locations} options={{ title: "Tela 05" }} />
        <Stack.Screen name="Star" component={Star} options={{ title: "Tela 06" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

