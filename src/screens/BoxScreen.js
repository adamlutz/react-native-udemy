import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>BoxScreen</Text>
        <Text style={styles.textTwoStyle}>BoxScreen 2</Text>
        <Text style={styles.textThreeStyle}>BoxScreen 3</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    // alignItems: 'stretch',  // center, flex-start, flex-end, default is stretch
    flexDirection: 'row',  // or column (default)
    // justifyContent: 'space-between', // flex-start, flex-end, center etc
    borderWidth: 3,
    borderColor: 'black',
    height: 200
  },
  textStyle: {
    borderWidth: 3,
    flex: 4,            // take up as much space as possible inside parent
                        // (when listed alone)
    borderColor: 'red',
  },
  textTwoStyle: {
    borderWidth: 3,
    flex: 2,            // relative % when used in concert w/ other flex values
    borderColor: 'red',
  },
  textThreeStyle: {
    borderWidth: 3,
    flex: 2,
    borderColor: 'red',
  }
});

export default BoxScreen;
