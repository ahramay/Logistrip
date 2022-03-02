import React from "react";
import { View, Text } from "react-native";

import styles from './styles';

const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Keep in mind that restrictions can change rapidly depending on local conditions. It's also important to keep in mind the COVID-19 situation, such as the level of spread and presence of variants, varies in each country. Check back for updates as your trip gets closer.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default CovidMessage;
