import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <View>
      <Button title='Components Demo'
      onPress={() => {console.log('here')}} />
      <Text style={styles.text}>Hi</Text>

      <TouchableOpacity
        onPress={() => {console.log('list pressed')}} >
        <Text style={styles.text}>Go To List Demo</Text>
      </TouchableOpacity>
    </View>
  )};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
