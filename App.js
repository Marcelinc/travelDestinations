import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './components/Home'
import Destination from './components/Destination'



const App = () => {

  const Stack = createNativeStackNavigator()

  return(
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
  )
}



export default App