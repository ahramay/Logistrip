import React from 'react';
import { Image } from "react-native";
import { StyleSheet,View,Text} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps'; 
import cars from '../../../assets/data/cars';


const HomeMap = (props) => {

  const getImage = (type) => {
    if (type === 'LgX') {
      return require('../../../assets/images/top-LgX.png');
    }
    if (type === 'Comfort') {
      return require('../../../assets/images/top-Comfort.png');
    }
    return require('../../../assets/images/top-LgXL.png');
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
        }}
      
      >
        {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{
                rotate: `${car.heading}deg`
              }],

            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
      </MapView> 
      </View>
    );
  };
  
export default HomeMap;

const styles = StyleSheet.create({
   
})
