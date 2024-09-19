import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { GetStarted, HomeScreen, ImageDetails } from "./src/screens"
import * as React from 'react';
import { StatusBar } from "react-native";



const App = () => {
  const Stack = createNativeStackNavigator()



  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName='GetStarted'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="ImageDetails" component={ImageDetails} />
      </Stack.Navigator>
      <StatusBar backgroundColor={"#ffffff"} />
    </NavigationContainer>
 
  )
}

export default App