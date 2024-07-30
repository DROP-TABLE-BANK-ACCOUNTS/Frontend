import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style = {{flex:1}}>
      <HomeScreen></HomeScreen>
    </SafeAreaView>
    // <View style={styles.container}>
      
      // <SafeAreaView >
      // <HomeScreen></HomeScreen>
      // </SafeAreaView>
    //   <StatusBar style="auto" />
    // </View>
  );
  // return (
  //   <SafeAreaView style={{ flex: 1 }}>
  //     <HomeScreen />
  //   </SafeAreaView>
  // );
};
// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
