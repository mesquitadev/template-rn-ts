import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './assets/globals';

const src: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Olá, bem vindo ao boilerplate do @mesquitadev!
    </Text>
  </View>
);

export default src;
