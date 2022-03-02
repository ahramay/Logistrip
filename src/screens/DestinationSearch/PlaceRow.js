import React from "react";
import { View, Text } from "react-native";
import { Icon} from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from './styles'

const PlaceRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {data.description === 'Home'
          ?  <Icon 
                type ="material-community"
                name ="home"
                size ={20}
              />
          : <Icon 
              type ="material-community"
              name ="home"
              size ={20}
            />
        }
      </View>
      <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
    </View>
  );
};

export default PlaceRow;
