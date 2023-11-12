import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import LandingPage from "./feature/LandingPage/LandingPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./feature/Login/Login";
import RegisterPage from "./feature/Register/Register";
import TimelinePage from "./feature/Review/Timeline";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Native() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Landing">
        <Tab.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
        <Tab.Screen name="Login" component={LoginPage} options={{ title: 'ログイン' }} />
        <Tab.Screen name="Register" component={RegisterPage} options={{ title: '登録' }} />
        <Tab.Screen name="Timeline" component={TimelinePage} options={{ title: 'タイムライン', headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
