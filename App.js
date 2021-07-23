import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import TextConstants from './TextConstants';

const App = () => {
  const [text, setText] = useState ('')

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.colorBlue}>
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
        <Text style={[styles.marginTop45,styles.colorBlue]}>
          {TextConstants.blurbs.App_Description}
        </Text>
        <TextInput placeholder={'Type Things Here'} style={styles.marginTop45} onBlur={(e) => setText(e.nativeEvent.text)}/>
        {
          text &&
          <Text style={[styles.marginTop45,styles.colorBlue]}>
            You typed: {text}
          </Text>
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  marginTop45: {
    marginTop: 45,
  },
  colorBlue: {
    color: 'blue',
  }
});

export default App;