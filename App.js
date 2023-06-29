import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './components/Home'
import Destination from './components/Destination'
import { GestureHandlerRootView } from 'react-native-gesture-handler'



const App = () => {

  const Stack = createNativeStackNavigator()

  return(
    <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={Home}
            options={{headerShown: false}}
            
          />
          <Stack.Screen
            name="Destination"
            component={Destination}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}



export default App