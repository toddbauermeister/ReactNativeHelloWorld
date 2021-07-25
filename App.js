import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Cat from './Cat';
import Styles from './Styles';
import TextConstants from './TextConstants';

const App = () => {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Cat />
      </View>
    </ScrollView>
  );
}

export default App;