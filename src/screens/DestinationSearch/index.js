import React, {useState, useEffect,useRef} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import styles from './styles.js';
import PlaceRow from "./PlaceRow";
import {GOOGLE_MAPS_APIKEY} from "@env";
const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResult', {
        originPlace,
        destinationPlace,
      })
    }
  }
  const [latlng,setLatLng] = useState({})

    const checkPermission =async()=>{
        const hasPermission = await Location.requestForegroundPermissionsAsync();
        if(hasPermission.status === 'granted') {
            const permission = await askPermission();
            return permission
        }
        return true
    };


    const askPermission = async()=>{
        const permission = await Location.requestForegroundPermissionsAsync()
        return permission.status === 'granted';
    };


    const getLocation = async()=>{
        try{
            const {granted} =await Location.requestForegroundPermissionsAsync();
            if(!granted)return;
            const {
                coords:{latitude,longitude},
            } = await Location.getCurrentPositionAsync();
            setLatLng({latitude:latitude,longitude:longitude})
        }catch(err){

        }
    }

  
    const _map = useRef(1);
  useEffect(() => {
      checkPermission();
        getLocation()
    checkNavigation();
  }, [originPlace, destinationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
      
      <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />

      </View>
    </SafeAreaView>
    
  );
};

export default DestinationSearch;
