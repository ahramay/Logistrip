import React from 'react';
import { StyleSheet,View,Text} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'; 

const GOOGLE_MAPS_APIKEY = 'AIzaSyCiAcmzTey5vh8_YY1AJlRd2KH3WfCyPK0';

const RouteMap = () => {

  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };

  const destination = {
    latitude: 28.450627,
    longitude: -16.263045,
  };



    return (
      <View style={{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#a0abff',
        height:300,
      }}>
      <MapView
        provider ={PROVIDER_GOOGLE}
        showsUserLocation ={true}
        style = {{height:'100%',width:'100%'}}
        initialRegion = {{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="black"
        />
        <Marker
          coordinate={origin}
          title={'Origin'}
        />
        <Marker
          coordinate={destination}
          title={"Destination"}
        />
      </MapView> 
      </View>
    );
  };
  
export default RouteMap;

const styles = StyleSheet.create({
   
})
