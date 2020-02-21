import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  // console.log(props.navigation)

  return (
    <View>
      <Button title='Components Demo'
      onPress={() => { props.navigation.navigate('Components')} } />
      <Text style={styles.text}>Hi</Text>

      <TouchableOpacity
        onPress={() =>  { props.navigation.navigate('List')} } >
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
