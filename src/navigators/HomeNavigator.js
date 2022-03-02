import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResult from '../screens/SearchResult';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const  HomeNavigator = (props) =>{
    return(
        <Stack.Navigator
            options={{
            headerShown: false,
            }}
        >
        <Stack.Screen 
            name ="HomeScreen"
            component = {HomeScreen}
            options={{
            headerShown: false,
            }}
        />
        <Stack.Screen 
            name ="DestinationSearch"
            component = {DestinationSearch}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name ="SearchResult"
            component = {SearchResult}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
    )
}

export default HomeNavigator;
