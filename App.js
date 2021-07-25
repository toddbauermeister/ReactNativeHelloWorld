import React from 'react';
import { ScrollView, View } from 'react-native';
import Cat from './Cat';
import Styles from './Styles';

const App = () => {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Cat name="Todd"/>
        <Cat name="Clari"/>
      </View>
    </ScrollView>
  );
}

export default App;