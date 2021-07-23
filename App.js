import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import TextConstants from './TextConstants';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>
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
        <Text style={styles.marginTop45}>
          {TextConstants.blurbs.App_Description}
        </Text>
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
  }
});

export default App;