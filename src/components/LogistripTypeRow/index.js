import React from 'react'
import { View,Text, Image} from 'react-native';
import styles from './styles';
import { Icon} from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";

const LogistripTypeRow = (props) => {

    const {type} =props;

    const getImage = () => {
        if (type.type === 'LgX') {
          return require('../../../assets/images/LgX.jpeg');
        }
        if (type.type === 'Comfort') {
          return require('../../../assets/images/Comfort.jpeg');
        }
        return require('../../../assets/images/LgVan.png');
      }

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}  
                source={getImage()}
             />
           <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type}{' '}
                    <Ionicons name={'person'} size={16} color={'#000000'} />
                    3
                </Text>
                <Text style={styles.time}>
                    8:20PM drop off
                </Text>
           </View>
           <View style={styles.rightContainer}>
            <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
            <Text style={styles.price}>est. ${type.price}</Text>
           </View>
        </View>
    )
}

export default LogistripTypeRow;
    
    