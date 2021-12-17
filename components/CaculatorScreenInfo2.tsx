import * as WebBrowser from 'expo-web-browser';
import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { TextInput } from 'react-native-gesture-handler';

export default function CaculatorScreenInfo2({ path }: { path: string }) {
  const [price, settPrice] = React.useState(null);
  
  const [percen, settPercen] = React.useState(null);
  const onChangeTextPrice1 = (price) => {
  }


  const onPress = () => {
    settPrice(null);
    settPercen(null);
    
  };

  return (
    <View>
    
      <View style={styles.getStartedContainer}>
      <View style={styles.groups}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Price (P)
          </Text>
          <TextInput
            onChangeText={(val: any) => settPrice(val)}
            keyboardType="decimal-pad"
            placeholder="Input price"
            style={[
              styles.getInputStyle,
              !price
                ? styles.inputStylePlaceholder
                : styles.inputStyleValue,
            ]}
            value={price}
            returnKeyType={'next'}
          />
        </View>

        <View style={styles.groups}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            %
          </Text>
          <TextInput
            onChangeText={(val: any) => settPercen(val)}
            keyboardType="decimal-pad"
            placeholder="Input %"
            style={[
              styles.getInputStyle,
              !percen
                ? styles.inputStylePlaceholder
                : styles.inputStyleValue,
            ]}
            value={percen}
            returnKeyType={'next'}
          />
        </View>

        <View style={styles.groups}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Result
          </Text>
          <View
            style={[styles.getInputStyle, styles.getInputStyleDisable]}

          ><Text>{ price && percen ? price * ( 1 + (percen/100) ) : null }</Text></View>
        </View>

        <View style={styles.groups}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
          >
           <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.helpContainer}>
        {/* <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  container: {
  },

  getStartedContainer: {
   alignItems: 'center',
   paddingBottom: 20, 
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    // textAlign: 'center',
    width:  100
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  groups: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  getInputStyle: {
    borderRadius: 8,
    borderColor :'#c7d1d6',
    borderWidth: 1,
    height: 40,
    width: Dimensions.get('window').width - 150,
    padding: 5,
    color: '#000000'
  }, 
  getInputStyleDisable: {
    backgroundColor: '#d8e4eb',
    // alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 40,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5
  },
  inputStylePlaceholder: {
    fontStyle: 'italic',
  },
  inputStyleValue: {
    fontStyle: 'normal',
    color: '#000',
    fontWeight: '500'
  }
});
