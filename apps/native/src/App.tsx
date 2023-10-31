import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import LandingPage from "./feature/LandingPage/LandingPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./feature/Login/Login";
import RegisterPage from "./feature/Register/Register";


const Stack = createStackNavigator();

export default function Native() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ title: 'ログイン' }} />
        <Stack.Screen name="Register" component={RegisterPage} options={{ title: '登録' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
