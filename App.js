import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TextConstants from './TextConstants';

export default App = () => {
  return (
    <ScrollView>
      <View style={styles.container}> 
        <Text>
          {TextConstants.headings.coolCat}
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
});
