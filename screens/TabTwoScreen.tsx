import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import CaculatorScreenInfo2 from '../components/CaculatorScreenInfo2';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <CaculatorScreenInfo2 path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   display: 'flex',
   // justifyContent: 'center', 
   alignItems: 'center', 
   margin: 'auto',
   height: Dimensions.get('window').height
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
  },
});
