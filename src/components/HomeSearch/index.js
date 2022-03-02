
import React from 'react';
import { StyleSheet,View,Text, Pressable } from 'react-native';
import { Icon} from 'react-native-elements';

import styles from './styles.js';

import { useNavigation } from '@react-navigation/native';

const HomeSearch = () => {
    const navigation = useNavigation();
    const goToSearch = () =>{
        navigation.navigate('DestinationSearch')

    }



    return (
        <View >
            <Pressable onPress={goToSearch} style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>
                <View style={styles.timeContainer}>
                    <Icon type = "material-community"
                                name ="clock-time-four" 
                                size = {16}
                    />
                    <Text>Now</Text>
                    <Icon type = "material-community"
                                name ="chevron-down"
                                size = {16}
                    />
                </View>
            </Pressable>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Icon type = "material-community"
                                name ="clock-time-four" 
                                size = {16}
                    />
                </View>
                <Text style={styles.destinationText}>Now</Text>
            </View>
            <View style={styles.row}>
                <View style={[styles.iconContainer,{backgroundColor:'#218cff'}]} >
                    <Icon type = "material-community"
                                name ="home" 
                                size = {16}
                    />
                </View>
                <Text style={styles.destinationText}>Now</Text>
            </View> 
        </View> 
    );
}


export default HomeSearch;

