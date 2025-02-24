import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import AddNewItem from '../screens/AddNewItemScreen/AddNewItem'
import Notification from '../screens/Notification'

const HomeNavigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='home'
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false
        }}
      />
      <Stack.Screen
        name='AddNewItem'
        component={AddNewItem}
        options={{
          title: 'Add New Item',
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Notification'
        component={Notification}
        options={{
          title: 'Notification',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigation
