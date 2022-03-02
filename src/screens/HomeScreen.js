import React from 'react';
import { StyleSheet,View,Text, ScrollView } from 'react-native';
import CovidMessage from '../components/CovidMessage';
import HomeMap from '../components/HomeMap';
import HomeSearch from '../components/HomeSearch';


const HomeScreen = (props) => {
    return (
        <ScrollView bounces={false} >
            <View >
                <HomeMap />
                <CovidMessage />
                <HomeSearch />
            </View>
        </ScrollView>
    );
}


export default HomeScreen;

const styles = StyleSheet.create({
    
})