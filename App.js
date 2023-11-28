import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Locations from './pages/Locations/Locations'
import Favorites from './pages/Favorites/Favorites'
import Locate from './pages/Locate/Locate'

import { navigationRef } from './RootNavigation';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
        <Stack.Screen name="Register" component={Register} options={{ title: "Register" }} />
        <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile" }} />
        <Stack.Screen name="Locations" component={Locations} options={{ title: "Locations" }} />
        <Stack.Screen name="Locate" component={Locate} options={{ title: "Locate" }} />
        <Stack.Screen name="Favorites" component={Favorites} options={{ title: "Favorites" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

