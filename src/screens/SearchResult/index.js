import React from 'react'

import { View,Text,ScrollView} from 'react-native';
import RouteMap from '../../components/RouteMap';
import LogistripTypes from '../../components/LogistripTypes'

import { useRoute } from '@react-navigation/native';

const SearchResult = (props) => {

    const route = useRoute();
  console.log(route.params)    
    

    return (
        <ScrollView bounces={false} >
            <View>
                <RouteMap />
            </View>
            <View style={{height:400}}>
            <LogistripTypes />
            </View>
        </ScrollView>
    )
}

export default SearchResult;
    
    