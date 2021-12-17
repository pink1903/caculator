import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import CaculatorScreenInfo from '../components/CaculatorScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <CaculatorScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center', 
    margin: 'auto',
    // backgroundColor:'pink',
    height: Dimensions.get('window').height
   },
   title: {
     fontSize: 20,
     fontWeight: 'bold',
   },
   separator: {
   },
});
