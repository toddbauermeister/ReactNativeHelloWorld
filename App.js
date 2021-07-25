import React from 'react';
import { ScrollView, View } from 'react-native';
import Cat from './Cat';
import Styles from './Styles';

const App = () => {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Cat name="Todd" imageUrl="https://reactnative.dev/docs/assets/p_cat2.png"/>
        <Cat name="Clari"imageUrl="https://reactnative.dev/docs/assets/p_cat1.png"/>
      </View>
    </ScrollView>
  );
}

export default App;