import React from 'react'

import { View,Text,Pressable} from 'react-native';
import LogistripTypeRow from '../LogistripTypeRow';
import typesData from '../../../assets/data/types'

const LogistripTypes = (props) => {
   
    return (
        <View>
            {typesData.map((type) => (
                <LogistripTypeRow 
                   type={type}
                   key={type.id}
                />
            ))}
            <Pressable  style={{
                backgroundColor: 'black',
                padding: 10,
                margin: 10,
                alignItems: 'center',
            }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                    Confirm Trip
                </Text>
            </Pressable>
        </View>
    )
}

export default LogistripTypes;
    
    