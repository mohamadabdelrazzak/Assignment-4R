
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Assignment-4-Master/src/Screens/HomeScreen';
import DetailsScreen from '../Assignment-4-Master/src/Screens/DetailsScreen';
import StartScreen from '../Assignment-4-Master/src/Screens/StartScreen';
import { View } from 'react-native';

import { AppContextProvider ,  } from './Global/Context';

export default function Main() {
const Stack = createNativeStackNavigator();
 
  return (

   <AppContextProvider>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} 
             options={ {title: 'Home',
              headerStyle: { backgroundColor: '#f4511e' },}} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} 
            options={ {title: 'Details',headerStyle: { backgroundColor: '#f4511e' },}}/>
            <Stack.Screen name="StartScreen" component={StartScreen} 
            options={ {title: 'Action',headerStyle: { backgroundColor: '#f4511e' },}}/>
        </Stack.Navigator>
    </NavigationContainer>
   </AppContextProvider>
    
    

  );
}

