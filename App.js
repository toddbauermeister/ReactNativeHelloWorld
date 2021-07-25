import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Styles from './Styles';
import TextConstants from './TextConstants';

const App = () => {
  // creates a property in state called 'text'
  // creates a function called setText which can alter the value of the property 'text'
  // call useState and give the default value for 'text', in this case an empty string
  const [text, setText] = useState ('')

  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text style={Styles.colorBlue}>
          {TextConstants.headings.Cool_Cat}
        </Text>
        <Image source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
          style={{
            width: 200,
            height: 200,
          }}
        />
        <Text style={[Styles.marginTop45,Styles.colorBlue]}>
          {TextConstants.blurbs.App_Description}
        </Text>
        <TextInput placeholder={'Type Things Here'} style={Styles.marginTop45} onBlur={(e) => setText(e.nativeEvent.text)}/>
        {
          text &&
          <Text style={[Styles.marginTop45,Styles.colorBlue]}>
            You typed: {text}
          </Text>
        }
      </View>
    </ScrollView>
  );
}

export default App;