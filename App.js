import React from 'react';
import { ScrollView, View } from 'react-native';
import Cat from './Cat';
import Styles from './Styles';
import textConstants from './TextConstants';

const App = () => {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Cat name={textConstants.catNames.Todd}/>
        <Cat name={textConstants.catNames.Clari}/>
      </View>
    </ScrollView>
  );
}

export default App;