import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StatBox = ({ iconSource, label }) => {
  return (
    <View style={styles.container}>
      <Image source={iconSource} style={styles.icon} />
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0e0e0',
    margin: 5,
  },
  icon: {
    width: 50,  // Adjust size as needed
    height: 50, // Adjust size as needed
    marginBottom: 5,
  },
});

export default StatBox;
