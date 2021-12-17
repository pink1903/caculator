import * as WebBrowser from 'expo-web-browser';
import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { TextInput } from 'react-native-gesture-handler';

export default function CaculatorScreenInfo({ path }: { path: string }) {
  const [price1, settPrice1] = React.useState(null);
  const [price, settPrice] = React.useState(null);
  const [price2, settPrice2] = React.useState(null);

  const onChangeTextPrice1 = (price) => {
    settPrice1(price)
  }


  const onPress = () => {
    settPrice1(null);
    settPrice2(null);
    
  };

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <View style={styles.groups}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Price 1 (P1)
          </Text>
          <TextInput
            onChangeText={(val: any) => settPrice1(val)}
            keyboardType="decimal-pad"
            placeholder="Input price 1"
            style={[
              styles.getInputStyle,
              !price1
                ? styles.inputStylePlaceholder
                : styles.inputStyleValue,
            ]}
            value={price1}
            returnKeyType={'next'}
          />
        </View>

        <View style={styles.groups}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Price 2 (P2)
          </Text>
          <TextInput
            placeholder="Input price 2"
            onChangeText={(val: any) => settPrice2(val)}
            keyboardType="decimal-pad"
            style={[
              styles.getInputStyle,
              !price2
                ? styles.inputStylePlaceholder
                : styles.inputStyleValue,
            ]}
            value={price2}
            returnKeyType={'next'}
          />
        </View>

        <View style={styles.groups}>
          <Text
            style={[styles.getStartedText]}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            % 
          </Text>
          <View
            style={[styles.getInputStyle, styles.getInputStyleDisable]}
          ><Text>{ price2 && price1 ? ( ((price2 - price1)/price1) *100 )   : null }</Text></View>
        </View>

        <View style={styles.groups}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            P2 - P1
          </Text>
          <View
            style={[styles.getInputStyle, styles.getInputStyleDisable]}

          ><Text>{ price2 && price1 ? (price2 - price1) : null }</Text></View>
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
    backgroundColor: 'red'
  },

  getStartedContainer: {
   alignItems: 'center',
   paddingBottom: 20,
   // backgroundColor:'pink',
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
